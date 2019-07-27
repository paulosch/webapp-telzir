import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* Types & Action Creators */

const { Types, Creators } = createActions({
  getRequest: [null],
  getSuccess: ['plans', 'prices', 'ddds'],
  getFailure: null,
  calculateRequest: ['minutes', 'dddOrigin', 'dddDestiny'],
  calculateSuccess: ['pricePerMinute', 'plans'],
  calculateFailure: null
});

export const SimulatorTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = Immutable({
  plans: [],
  prices: [],
  ddds: [],
  pricePerMinute: null,
  error: false,
  loading: false
});

/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_REQUEST]: state => state.merge({ loading: true }),

  [Types.GET_SUCCESS]: (state, { plans, prices, ddds }) =>
    state.merge({ loading: false, plans, prices, ddds }),

  [Types.GET_FAILURE]: state => state.merge({ loading: false, error: true }),

  [Types.CALCULATE_REQUEST]: state =>
    state.merge({
      loading: true
    }),

  [Types.CALCULATE_SUCCESS]: (state, { pricePerMinute, plans }) =>
    state.merge({
      loading: false,
      pricePerMinute,
      plans
    }),

  [Types.CALCULATE_FAILURE]: state =>
    state.merge({ loading: false, error: true })
});
