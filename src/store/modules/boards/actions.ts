import { Dispatch } from 'redux';
import api from '../../../api/request';
// import { IBoard } from '../../../common/interfaces/IBoard';
// import config from '../../../common/constants/api';

export const getBoards = () => async (dispatch: Dispatch) => {
  // eslint-disable-next-line no-console
  console.log('Checkpoint-console');
  try {
    const data = await api.get('/board');
    // eslint-disable-next-line no-console
    await dispatch({ type: 'UPDATE_BOARDS', payload: data });
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(e);
    dispatch({ type: 'ERROR_ACTION_TYPE' });
  }
};
