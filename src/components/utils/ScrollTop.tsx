import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function ScrollTop() {
  // useLocation hooks into React Router's state to track the active URL
  const { pathname } = useLocation();

  useEffect(() => {
    // Instantly snap the window position back to coordinates (0, 0)
    window.scrollTo(0, 0);
  }, [pathname]); // Fires this code block every single time the path changes

  return null; // This component handles logic only; it renders no layout UI
}
