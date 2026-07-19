import { Link } from "react-router-dom";

import DashboardHeader from "../components/dashboard/DashboardHeader";
import DashboardHero from "../components/dashboard/DashboardHero";
import DashboardStats from "../components/dashboard/DashboardStats";
import RecentGuests from "../components/dashboard/RecentGuests";
import ShareInvitation from "../components/dashboard/ShareInvitation";
import GiftFunds from "../components/dashboard/GiftFunds";
import DashboardLoader from "../components/dashboard/DashboardLoader";

import useDashboard from "../hooks/useDashboard";

export default function Dashboard() {
  const {
    wedding,
    stats,
    recentGuests,
    loading,
    copied,
    inviteUrl,
    handleCopyLink,
    handleLogout,
  } = useDashboard();

  if (loading) {
    return <DashboardLoader />;
  }

  // Empty state for first-time users
  if (!wedding) {
    return (
      <div className="min-h-screen bg-ivory flex items-center justify-center px-6">
        <div className="max-w-md text-center">
          <h1 className="font-serif text-3xl text-ink mb-4">
            Welcome to Resvio
          </h1>

          <p className="text-muted text-sm leading-relaxed mb-8">
            You haven't created a wedding yet. Create your wedding to start
            managing guests, RSVPs, invitations and gift funds.
          </p>

          <Link
            to="/weddings/create"
            className="inline-flex items-center justify-center bg-terracotta text-ivory font-serif px-6 py-3 rounded-lg hover:bg-terracotta-dark transition-colors"
          >
            Create Wedding
          </Link>
        </div>
      </div>
    );
  }

  // Safety check
  if (!stats) {
    return <DashboardLoader />;
  }

  return (
    <div className="min-h-screen bg-ivory">
      <DashboardHeader onLogout={handleLogout} />

      <main className="px-6 md:px-12 py-8 max-w-5xl mx-auto">
        <DashboardHero wedding={wedding} />

        <DashboardStats stats={stats} />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <RecentGuests guests={recentGuests} />

          <div className="space-y-6">
            <ShareInvitation
              inviteUrl={inviteUrl}
              copied={copied}
              onCopy={handleCopyLink}
            />

            <GiftFunds stats={stats} />
          </div>
        </div>
      </main>
    </div>
  );
}