import { useNavigate } from 'react-router-dom';
import { ASSETS } from '../data/assets.js';

export default function BackButton({ fallback = '/home' }) {
  const navigate = useNavigate();
  // React Router stores the history index in state.idx; 0 means there is nothing to go back to.
  const handleClick = () => (window.history.state?.idx > 0 ? navigate(-1) : navigate(fallback));

  return (
    <button type="button" className="back-button" onClick={handleClick} aria-label="Go back">
      <img src={ASSETS.ui.arrowBack} alt="" />
    </button>
  );
}
