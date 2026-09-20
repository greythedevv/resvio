
import { NavLink } from 'react-router-dom';
import { LuHeart } from 'react-icons/lu';
import { DASHBOARD_NAV } from '../../constants/dashboardNav';

export default function HeroSidebar() {
  return (
    <aside className="hidden lg:flex flex-col w-56 shrink-0 h-screen sticky top-0 bg-ink text-ivory/70">
      <div className="px-6 pt-7 pb-6">
        <p className="font-serif text-xl italic text-ivory">
          Our Wedding
        </p>

        <p className="text-[10px] tracking-widest text-ivory/40 mt-0.5">
          DASHBOARD
        </p>
      </div>

      <nav className="flex-1 px-3 space-y-0.5">
        {DASHBOARD_NAV.map(({ label, path, icon: Icon }) => (
          <NavLink
            key={path}
            to={path}
            end={path === '/dashboard'}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${
                isActive
                  ? 'bg-terracotta text-ivory font-medium'
                  : 'text-ivory/60 hover:bg-white/5 hover:text-ivory'
              }`
            }
          >
            <Icon size={16} strokeWidth={1.75} />
            {label}
          </NavLink>
        ))}
      </nav>

      <div className="px-6 pb-7 text-center border-t border-white/10 pt-6">
        <p className="font-serif italic text-sm text-ivory/70">
          Two Hearts
        </p>

        <p className="font-serif italic text-sm text-ivory/70">
          One Journey
        </p>

        <p className="font-serif italic text-sm text-ivory/70">
          A Lifetime
        </p>

        <LuHeart
          size={12}
          className="mx-auto mt-3 text-terracotta"
        />
      </div>
    </aside>
  );
}
