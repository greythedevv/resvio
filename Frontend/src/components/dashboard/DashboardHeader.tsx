import { Link } from "react-router-dom";
import {
  FiImage,
  FiSettings,
  FiLogOut,
} from "react-icons/fi";

interface DashboardHeaderProps {
  onLogout: () => void;
}

export default function DashboardHeader({
  onLogout,
}: DashboardHeaderProps) {
  return (
    <header className="flex items-center justify-between px-6 md:px-12 py-5 border-b border-border bg-white">
      <Link
        to="/"
        className="font-serif text-xl text-ink"
      >
        resvio
      </Link>

      <div className="flex items-center gap-4">
        <Link
          to="/gallery"
          className="text-muted hover:text-terracotta"
          title="Gallery"
        >
          <FiImage size={18} />
        </Link>

        <Link
          to="/settings"
          className="text-muted hover:text-terracotta"
          title="Settings"
        >
          <FiSettings size={18} />
        </Link>

        <button
          onClick={onLogout}
          className="text-muted hover:text-terracotta"
          title="Logout"
        >
          <FiLogOut size={18} />
        </button>
      </div>
    </header>
  );
}