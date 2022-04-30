import { Dispatch } from 'redux';
import api from '../../../api/request';

export const getLists = (id: number) => async (dispatch: Dispatch) => {
  try {
    const data = await api.get(`/board/${id}`);
    await dispatch({ type: 'UPDATE_BOARDS', payload: data });
  } catch (e) {
    dispatch({ type: 'ERROR_ACTION_TYPE' });
  }
};
