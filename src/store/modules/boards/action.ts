import api from '../../../api/request'
import { Dispatch } from 'redux'

export const getBoards = () => async (dispatch: Dispatch) => {
    try {
        const data = await api.get("/board");
        await dispatch({type: 'UPDATE_BOARDS', payload: data});
    } catch (e) {
        console.log(e)
        dispatch({type: 'ERROR_ACTION_TYPE'});
    }
}
