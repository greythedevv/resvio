import { useState } from 'react';
import { LuBell, LuUser, LuLogOut } from 'react-icons/lu';
import { useNavigate } from 'react-router-dom';
import MobileNav from './MobileNav';
import type { Wedding } from '../../types/wedding';
import { logoutUser } from '../../services/auth.service';

interface Props {
  wedding: Wedding | null;
}

export default function TopBar({ wedding }: Props) {
  const [profileOpen, setProfileOpen] = useState(false);
  const navigate = useNavigate();

  const handleProfile = () => {
    setProfileOpen(false);
    navigate('/dashboard/profile');
  };

  const handleLogout = async () => {
  try {
    await logoutUser();
    setProfileOpen(false);
    navigate('/login');
  } catch (error) {
    console.error('Logout failed:', error);
  }
};

  return (
    <header className="flex items-center justify-between px-6 md:px-8 h-14 border-b border-border bg-white">
      <div className="flex items-center gap-3">
        <MobileNav />

        <p className="text-ink text-sm font-medium">
          {wedding
            ? `${wedding.partner1Name} & ${wedding.partner2Name}`
            : ''}
        </p>

        {wedding && (
          <span className="text-xs text-sage bg-sage-soft px-2 py-0.5 rounded-full font-medium">
            {wedding.isPublished ? 'Live' : 'Draft'}
          </span>
        )}
      </div>

      <div className="flex items-center gap-4">
        {/* Notification */}
        <button
          className="text-muted hover:text-ink transition-colors"
          aria-label="Notifications"
        >
          <LuBell size={17} strokeWidth={1.75} />
        </button>

        {/* Profile */}
        <div className="relative">
          <button
            onClick={() => setProfileOpen((prev) => !prev)}
            className="w-7 h-7 rounded-full bg-terracotta-light flex items-center justify-center text-terracotta text-xs font-medium hover:ring-2 hover:ring-terracotta-light transition-all"
            aria-label="Open profile menu"
            aria-expanded={profileOpen}
          >
            {wedding?.partner1Name?.[0]?.toUpperCase() ?? '?'}
          </button>

          {/* Dropdown */}
          {profileOpen && (
            <div className="absolute right-0 top-10 w-44 bg-white border border-border rounded-xl shadow-lg p-1.5 z-50">
              <button
                onClick={handleProfile}
                className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-body hover:bg-ivory hover:text-ink transition-colors"
              >
                <LuUser size={16} strokeWidth={1.75} />
                Profile
              </button>

              <button
                onClick={handleLogout}
                className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-body hover:bg-ivory hover:text-ink transition-colors"
              >
                <LuLogOut size={16} strokeWidth={1.75} />
                Log out
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}