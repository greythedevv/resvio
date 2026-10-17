import type { Wedding } from "./wedding";

export interface DashboardOutletContext {
  wedding: Wedding | null;
  refetch: () => Promise<void>;
}