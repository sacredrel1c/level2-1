import { Dispatch } from 'redux';
import api from '../../../api/request';
// import { IBoard } from '../../../common/interfaces/IBoard';
// import config from '../../../common/constants/api';

export const getBoards = () => async (dispatch: Dispatch) => {
  try {
    const data = await api.get('/board');
    await dispatch({ type: 'UPDATE_BOARDS', payload: data });
  } catch (e) {
    dispatch({ type: 'ERROR_ACTION_TYPE' });
  }
};
