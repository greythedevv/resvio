import { LuLayoutDashboard, LuUsers, LuMailCheck, LuGift, LuListChecks, LuSend, LuUser } from 'react-icons/lu';
import type { IconType } from 'react-icons';

export interface NavItem {
  label: string;
  path: string;
  icon: IconType;
}

export const DASHBOARD_NAV: NavItem[] = [
  { label: 'Overview', path: '/dashboard', icon: LuLayoutDashboard },
  { label: 'Guests', path: '/dashboard/guests', icon: LuUsers },
  { label: 'RSVP', path: '/dashboard/rsvp', icon: LuMailCheck },
  { label: 'Gift Fund', path: '/dashboard/gifts', icon: LuGift },
  { label: 'Wish List', path: '/dashboard/wishlist', icon: LuListChecks },
  { label: 'Invitation', path: '/dashboard/invitation', icon: LuSend },
  { label: 'Profile', path: '/dashboard/profile', icon: LuUser },
];