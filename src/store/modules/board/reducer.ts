import { IList } from '../../../common/interfaces/IList';

const initialState = {
  lists: [] as IList[],
};

// eslint-disable-next-line @typescript-eslint/default-param-last
export default function reducer(state = initialState, action: { type: string; payload: IList[] }) {
  switch (action.type) {
    case 'UPDATE_BOARDS':
      return {
        ...state,
        lists: action.payload,
      };
    default: {
      return { ...state, ...action.payload };
    }
  }
}
