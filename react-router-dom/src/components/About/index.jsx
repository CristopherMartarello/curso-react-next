import { useLocation } from 'react-router-dom';
import './style.css';

export const About = () => {
  const location = useLocation();
  const { state } = location;
  return (
    <div>
      <h1>About</h1>
      <p>{state}</p>
    </div>
  );
};
