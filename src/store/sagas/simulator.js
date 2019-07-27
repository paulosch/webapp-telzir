import { call, put, select } from 'redux-saga/effects';

import api from '../../services/api';

import SimulatorActions from '../ducks/simulator';

export function* load() {
  try {
    const { data: plans } = yield call(api.get, '/plans');
    const { data: prices } = yield call(api.get, '/prices');

    const ddds = getListOfDdds(prices);

    yield put(SimulatorActions.getSuccess(plans, prices, ddds));
  } catch (err) {
    console.tron.log(err);
    yield put(SimulatorActions.getFailure);
  }
}

export function* calculateSimulator(action) {
  try {
    const { prices, plans } = yield select(getSimulator);
    const { minutes, dddOrigin, dddDestiny } = action;

    const pricePerMinute = calculatePricePerMinute(
      prices,
      dddOrigin,
      dddDestiny
    );
    const plansPrices = calculatePlansPrice(pricePerMinute, plans, minutes);

    yield put(SimulatorActions.calculateSuccess(pricePerMinute, plansPrices));
  } catch (err) {
    console.tron.log(err.message);
    yield put(SimulatorActions.getFailure);
  }
}

//--- util
const getSimulator = state => state.simulator;

const calculatePricePerMinute = (prices, dddOrigin, dddDestiny) => {
  const price = prices.find(
    price => price.origin === dddOrigin && price.destiny === dddDestiny
  );

  if (!price) {
    return 0;
  }

  return price.price;
};

const calculatePlansPrice = (pricePerMinute, plans, minutes) => {
  let plansPrices = [];

  plans.forEach(plan => {
    let price = 0;

    const additionalMinutes = minutes - plan.minutes;
    if (additionalMinutes > 0) {
      const normalPrice = pricePerMinute * additionalMinutes;
      price = normalPrice + normalPrice * plan.pc_addition;
    }

    plansPrices.push({ ...plan, price });
  });

  return plansPrices;
};

const getListOfDdds = prices => {
  let ddds = prices.map(price => (origin ? price.origin : price.destiny));
  ddds = [...new Set(ddds)];

  return ddds.sort();
};
