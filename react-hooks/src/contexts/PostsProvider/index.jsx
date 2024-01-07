//O componente propriamente dito
import P from 'prop-types';
import { PostsContext } from './context';
import { reducer } from './reducer';
import { data } from './data';
import { useReducer } from 'react';

export const PostsProvider = ({ children }) => {
  const [postsState, postsDispatch] = useReducer(reducer, data);

  return (
    <PostsContext.Provider value={{ postsState, postsDispatch }}>
      {children}
    </PostsContext.Provider>
  );
};

PostsProvider.propTypes = {
  children: P.node.isRequired, //uma children é um nó -> node -> vários elementos
};
