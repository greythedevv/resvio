import  { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { LuMenu, LuX } from 'react-icons/lu';
import { DASHBOARD_NAV } from '../../constants/dashboardNav';

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button onClick={() => setOpen(true)} className="p-1.5 text-ink" aria-label="Open menu">
        <LuMenu size={20} strokeWidth={1.75} />
      </button>

      {open && (
        <div className="fixed inset-0 z-50 bg-ink/30" onClick={() => setOpen(false)}>
          <div
            className="absolute left-0 top-0 h-full w-64 bg-ivory p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <p className="font-serif text-base text-ink">resvio</p>
              <button onClick={() => setOpen(false)} aria-label="Close menu">
                <LuX size={20} className="text-muted" />
              </button>
            </div>
            <nav className="space-y-0.5">
              {DASHBOARD_NAV.map(({ label, path, icon: Icon }) => (
                <NavLink
                  key={path}
                  to={path}
                  end={path === '/dashboard'}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm transition-colors ${
                      isActive ? 'bg-terracotta-light text-terracotta font-medium' : 'text-body hover:bg-white'
                    }`
                  }
                >
                  <Icon size={16} strokeWidth={1.75} />
                  {label}
                </NavLink>
              ))}
            </nav>
          </div>
        </div>
      )}
    </div>
  );
}