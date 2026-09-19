
import { Outlet } from 'react-router-dom';
import HeroSidebar from '../components/dashboard/HeroSidebar';
import TopBar from '../components/dashboard/TopBar';
import { useCurrentWedding } from '../hooks/useCurrentWedding';

export default function DashboardLayout() {
  const { wedding, loading } = useCurrentWedding();

  return (
    <div className="flex bg-ivory min-h-screen">
      <HeroSidebar />
      <div className="flex-1 min-w-0 flex flex-col">
        <TopBar wedding={wedding} />
        <main className="flex-1 px-6 py-6">
          {loading ? <p className="text-muted text-sm">Loading...</p> : <Outlet context={{ wedding }} />}
        </main>
      </div>
    </div>
  );
}