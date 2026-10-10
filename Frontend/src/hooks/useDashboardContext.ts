import { useOutletContext } from "react-router-dom";
import type { DashboardOutletContext } from "../types/dashboardContext";

export const useDashboardContext = () =>
  useOutletContext<DashboardOutletContext>();