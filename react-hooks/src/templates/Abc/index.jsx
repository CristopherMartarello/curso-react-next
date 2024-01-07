import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export const Abc = () => {
  const { slug, id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    // Em 5 segundos seremos redirecionados para a / (App)
    setTimeout(() => {
      navigate('/');
    }, 5000);
  }, [navigate]);

  return (
    <div>
      <h1>
        ABC {slug} {id}
      </h1>
    </div>
  );
};
