import * as types from './types';

export const reducer = (actualState, action) => {
  switch (action.type) {
    case types.INCREMENT_COUNTER: {
      return { ...actualState, counter: actualState.counter + 1 };
    }
    case types.DECREMENT_COUNTER: {
      return { ...actualState, counter: actualState.counter - 1 };
    }
  }

  return { ...actualState };
};
