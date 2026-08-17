import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { GlobalLayout } from '@/components/layout/GlobalLayout';
import { HomePage } from '@/pages/HomePage';
import { RidingLessonsPage } from '@/pages/RidingLessonsPage';
import { PonyRidesPage } from '@/pages/PonyRidesPage';
import { HorseCampPage } from '@/pages/HorseCampPage';
import { ContactPage } from '@/pages/ContactPage';
import { MeetAnniePage } from '@/pages/MeetAnniePage';
import { FaqPage } from '@/pages/FaqPage';
import { RidingGuidelinesPage } from '@/pages/RidingGuidelinesPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <GlobalLayout />, // Uses your clean master layout wrapper
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/riding-lessons', element: <RidingLessonsPage /> },
      { path: '/pony-rides', element: <PonyRidesPage /> },
      { path: '/horse-camp', element: <HorseCampPage /> },
      { path: '/meet-annie', element: <MeetAnniePage /> },
      { path: '/faq', element: <FaqPage /> },
      { path: '/riding-guidelines', element: <RidingGuidelinesPage /> },
      { path: '/contact', element: <ContactPage /> },
    ],
  },
]);

export function AppRouter() {
  return <RouterProvider router={router} />;
}
