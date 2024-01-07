import { useEffect, useRef, useState } from 'react';
import './style.css';
import { useNavigate } from 'react-router-dom';

export const Redirect = () => {
  const [time, setTime] = useState(3);
  const timeout = useRef(0);
  const navigate = useNavigate();

  useEffect(() => {
    clearTimeout(timeout.current);
    timeout.current = setTimeout(() => {
      setTime((time) => time - 1);
    }, 1000);

    if (time <= 0) {
      navigate('/about', {
        state: `This is the state: ${Math.random()}`,
      });
    }

    return () => {
      //faço isso para não ficar lixo na página
      clearTimeout(timeout.current);
    };
  }, [time, navigate]);

  return (
    <div>
      <h1>Get out of here in: {time}</h1>
    </div>
  );
};
