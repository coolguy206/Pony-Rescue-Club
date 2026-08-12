import { Outlet } from 'react-router-dom';
import { Header } from './Header'; // Move your header HTML to its own file
import { Footer } from './Footer';

export function GlobalLayout() {
  return (
    // This master wrapper ensures your footer always stays at the bottom of the screen!
    <div className="flex min-h-screen flex-col xl:mx-auto">
      <Header />

      {/* The main tag expands to soak up empty vertical space */}
      <main className="flex grow flex-wrap">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
