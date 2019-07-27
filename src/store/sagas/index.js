import { all, takeLatest } from 'redux-saga/effects';

import { SimulatorTypes } from '../ducks/simulator';

import { load as loadSimulator, calculateSimulator } from './simulator';

export default function* rootSaga() {
  yield all([
    takeLatest(SimulatorTypes.GET_REQUEST, loadSimulator),
    takeLatest(SimulatorTypes.CALCULATE_REQUEST, calculateSimulator)
  ]);
}
