import { useState } from "react";
import { useDashboardContext } from "../../hooks/useDashboardContext";
import ProfileHero from "../../components/profile/ProfileHero";
import ProfileTabs from "../../components/profile/ProfileTabs";
import EventDetailsTab from "../../components/profile/EventDetailsTab";
import StoryTab from "../../components/profile/StoryTab";
import SettingsTab from "../../components/profile/SettingsTab";
import EditEventDetailsModal from "../../components/profile/EditEventDetailsModal";
import EditScheduleModal from "../../components/profile/EditScheduleModal";
import EditStoryModal from "../../components/profile/EditStoryModal";
import EditSettingsModal from "../../components/profile/EditSettingsModal";
import type { ProfileModalKey, ProfileTab } from "../../constants/profile";

export default function ProfilePage() {
  const { wedding, refetch } = useDashboardContext();

  const [tab, setTab] = useState<ProfileTab>("event");
  const [modal, setModal] = useState<ProfileModalKey | null>(null);

  const closeModal = () => setModal(null);

  return (
    <div>
      <div className="mb-6">
        <p className="text-[10px] uppercase tracking-[0.16em] text-terracotta font-medium mb-1">
          Wedding profile
        </p>
        <h1 className="font-serif text-3xl italic text-ink">Profile</h1>
        <p className="text-body text-sm mt-1">
          Manage your wedding details, story, and guest settings.
        </p>
      </div>

      <ProfileHero wedding={wedding} />
      <ProfileTabs active={tab} onChange={setTab} />

      {tab === "event" && (
        <EventDetailsTab
          wedding={wedding}
          onEditDetails={() => setModal("event")}
          onEditSchedule={() => setModal("schedule")}
        />
      )}
      {tab === "story" && (
        <StoryTab wedding={wedding} onEdit={() => setModal("story")} />
      )}
      {tab === "settings" && (
        <SettingsTab
          wedding={wedding}
          onEdit={() => setModal("settings")}
          onManageDetails={() => setTab("event")}
        />
      )}

      {/* Mounted only while open, so each modal re-reads the latest wedding */}
      {wedding && modal === "event" && (
        <EditEventDetailsModal wedding={wedding} onClose={closeModal} onSaved={refetch} />
      )}
      {wedding && modal === "schedule" && (
        <EditScheduleModal wedding={wedding} onClose={closeModal} onSaved={refetch} />
      )}
      {wedding && modal === "story" && (
        <EditStoryModal wedding={wedding} onClose={closeModal} onSaved={refetch} />
      )}
      {wedding && modal === "settings" && (
        <EditSettingsModal wedding={wedding} onClose={closeModal} onSaved={refetch} />
      )}
    </div>
  );
}