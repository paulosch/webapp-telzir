import { call, put } from 'redux-saga/effects';

import api from '../../services/api';

import SimulatorActions from '../ducks/simulator';

export function* load() {
  try {
    const { data: plans } = yield call(api.get, '/plans');
    const { data: prices } = yield call(api.get, '/prices');
    yield put(SimulatorActions.getSuccess(plans, prices));
  } catch (err) {
    console.tron.log(err);
    yield put(SimulatorActions.getFailure);
  }
}
