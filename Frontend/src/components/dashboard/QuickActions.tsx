
import { Link } from 'react-router-dom';
import { LuSend, LuUsers, LuArmchair, LuGift, LuArrowRight } from 'react-icons/lu';

const ACTIONS = [
  { label: 'Send Invitations', path: '/dashboard/invitation', icon: LuSend },
  { label: 'Manage Guest List', path: '/dashboard/guests', icon: LuUsers },
  { label: 'View Seating Plan', path: '/dashboard/overview', icon: LuArmchair },
  { label: 'Add to Gift Fund', path: '/dashboard/gifts', icon: LuGift },
];

export default function QuickActions() {
  return (
    <div>
      <p className="text-ink text-sm font-medium mb-3">Quick Actions</p>
      <div className="space-y-2">
        {ACTIONS.map(({ label, path, icon: Icon }) => (
          <Link
            key={label}
            to={path}
            className="flex items-center justify-between bg-ink text-ivory rounded-lg px-4 py-3 text-sm hover:bg-ink/90 transition-colors"
          >
            <span className="flex items-center gap-2.5">
              <Icon size={15} /> {label}
            </span>
            <LuArrowRight size={14} className="opacity-60" />
          </Link>
        ))}
      </div>
    </div>
  );
}