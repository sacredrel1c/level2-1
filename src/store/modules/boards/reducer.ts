import { IBoard } from '../../../common/interfaces/IBoard';

const initialState = {
  boards: [] as IBoard[],
};

export default function reducer(action: { type: string; payload: IBoard }, state = initialState) {
  return { ...state };

}
