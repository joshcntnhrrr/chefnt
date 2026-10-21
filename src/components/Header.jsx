import { ASSETS } from '../data/assets.js';
import BackButton from './BackButton.jsx';

export default function Header({ back = false, backFallback }) {
  return (
    <header className="header">
      <img className="header__logo" src={ASSETS.logo} alt="Chef'nt" />
      {back && <BackButton fallback={backFallback} />}
    </header>
  );
}
