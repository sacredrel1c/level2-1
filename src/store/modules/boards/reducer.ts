/* eslint-disable no-console */
import { IBoard } from '../../../common/interfaces/IBoard';

const initialState = {
  boards: [] as IBoard[],
};

// eslint-disable-next-line @typescript-eslint/default-param-last
export default function reducer(state = initialState, action: { type: string; payload: IBoard[] }) {
  switch (action.type) {
    case 'UPDATE_BOARDS':
      return {
        ...state,
        boards: action.payload,
      };
    default: {
      return { ...state, ...action.payload };
    }
  }
}
