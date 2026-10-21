import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ASSETS } from '../data/assets.js';

const SPLASH_MS = 2000;

export default function Splash() {
  const navigate = useNavigate();

  useEffect(() => {
    const t = setTimeout(() => navigate('/home', { replace: true }), SPLASH_MS);
    return () => clearTimeout(t);
  }, [navigate]);

  return (
    <section className="splash">
      <img className="splash__logo" src={ASSETS.logo} alt="Chef'nt" />
    </section>
  );
}
