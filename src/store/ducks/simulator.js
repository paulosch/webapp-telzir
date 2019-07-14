import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* Types & Action Creators */

const { Types, Creators } = createActions({
  getRequest: [null],
  getSuccess: ['plans', 'prices'],
  getFailure: null
});

export const SimulatorTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = Immutable({
  plans: [],
  prices: [],
  error: false,
  loading: false
});

/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_REQUEST]: state => state.merge({ loading: true }),
  [Types.GET_SUCCESS]: (state, { plans, prices }) =>
    state.merge({ loading: false, plans, prices }),
  [Types.GET_FAILURE]: state => state.merge({ loading: false, error: true })
});
