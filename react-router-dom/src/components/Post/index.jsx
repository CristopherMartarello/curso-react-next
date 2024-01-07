import { Outlet, useParams, useSearchParams } from 'react-router-dom';
import './style.css';

export const Post = () => {
  const params = useParams();
  const { id } = params;
  const [qs] = useSearchParams();

  return (
    <div>
      <h1>
        Post {`Param: ${id}`} {`QS: ${qs}`}
      </h1>
      <Outlet></Outlet>
      {/*Usado em rotas aninhadas para carregar o conteudo/componente filho/aninhado*/}
    </div>
  );
};
