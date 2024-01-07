//o reducer do componente

import * as types from './types';

export const reducer = (actualState, action) => {
  switch (action.type) {
    case types.POSTS_SUCCESS: {
      console.log(action.type);
      return { ...actualState, posts: action.payload, loading: false };
    }

    case types.POSTS_LOADING: {
      console.log(action.type);
      return { ...actualState, loading: true };
    }
  }

  console.log('NÃO ENCONTREI A ACTIONTYPE, ', action.type);
  return { ...actualState };
};
