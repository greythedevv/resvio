import { LuLayoutDashboard, LuUsers, LuGift, LuImage, LuSettings } from 'react-icons/lu';
import type { IconType } from 'react-icons';

export interface NavItem {
  label: string;
  path: string;
  icon: IconType;
}

export const DASHBOARD_NAV: NavItem[] = [
  { label: 'Overview', path: '/dashboard', icon: LuLayoutDashboard },
  { label: 'Guests', path: '/dashboard/guests', icon: LuUsers },
  { label: 'Gifts', path: '/dashboard/gifts', icon: LuGift },
  { label: 'Gallery', path: '/dashboard/gallery', icon: LuImage },
  { label: 'Settings', path: '/dashboard/settings', icon: LuSettings },
];