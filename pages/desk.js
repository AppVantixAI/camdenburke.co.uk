import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import DeskErrorBoundary from '../components/DeskErrorBoundary';

const DesktopScene = dynamic(() => import('../components/DesktopScene'), { ssr: false });

const VIEW_MODE_KEY = 'cb_view_mode';

/** Direct link to the 3D workstation. */
export default function DeskPage() {
  const router = useRouter();

  const goFlat = () => {
    sessionStorage.setItem(VIEW_MODE_KEY, 'flat');
    router.push('/');
  };

  const goDesk = () => {
    sessionStorage.setItem(VIEW_MODE_KEY, 'desk');
  };

  return (
    <DeskErrorBoundary onRetryDesk={goDesk}>
      <DesktopScene siteSrc="/site" onGoFlat={goFlat} onGoDesk={goDesk} viewMode="desk" />
    </DeskErrorBoundary>
  );
}
