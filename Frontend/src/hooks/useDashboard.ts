import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  getCurrentWedding,
  getWeddingStats,
  getRecentGuests,
} from "../services/dashboard";

import { logoutUser } from "../services/auth.service";
import { getInviteUrl } from "../utils/invite";

import type {
  Wedding,
  Stats,
  Guest,
} from "../types/dashboard";

const POLL_INTERVAL = 15000;

export default function useDashboard() {
  const navigate = useNavigate();

  const [wedding, setWedding] = useState<Wedding | null>(null);
  const [stats, setStats] = useState<Stats | null>(null);
  const [recentGuests, setRecentGuests] = useState<Guest[]>([]);
  const [loading, setLoading] = useState(true);
  const [copied, setCopied] = useState(false);

  const fetchDashboard = useCallback(async () => {
    setLoading(true);

    try {
      const weddingData = await getCurrentWedding();
      setWedding(weddingData);

      const [statsData, guestsData] = await Promise.all([
        getWeddingStats(weddingData._id),
        getRecentGuests(weddingData._id),
      ]);

      setStats(statsData);
      setRecentGuests(guestsData);
    } catch (error: any) {
      // First-time user: no wedding created yet
      if (error.status === 404) {
        setWedding(null);
        setStats(null);
        setRecentGuests([]);
        return;
      }

      console.error("Failed to load dashboard:", error);

      // Optional: clear stale data
      setWedding(null);
      setStats(null);
      setRecentGuests([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchDashboard();

    const interval = setInterval(fetchDashboard, POLL_INTERVAL);

    return () => clearInterval(interval);
  }, [fetchDashboard]);

  const handleLogout = async () => {
    try {
      await logoutUser();
    } finally {
      navigate("/login");
    }
  };

  const inviteUrl = wedding ? getInviteUrl(wedding.slug) : "";

  const handleCopyLink = async () => {
    if (!inviteUrl) return;

    try {
      await navigator.clipboard.writeText(inviteUrl);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error("Failed to copy invitation link:", error);
    }
  };

  return {
    wedding,
    stats,
    recentGuests,
    loading,
    copied,
    inviteUrl,
    handleLogout,
    handleCopyLink,
    refreshDashboard: fetchDashboard,
  };
}