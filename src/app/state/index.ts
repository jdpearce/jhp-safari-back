import {
  Action,
  createAction,
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
} from '@ngrx/store';

export const enterPage = createAction('[Main Page] Enter');

export const TEST_FEATURE_KEY = 'test';

export interface TestState {
  showMessage: boolean;
}

export interface TestPartialState {
  readonly [TEST_FEATURE_KEY]: TestState;
}

export const initialState: TestState = {
  showMessage: false,
};

const reducer = createReducer(
  initialState,
  on(enterPage, (state) => ({
    ...state,
    showMessage: true,
  }))
);

export function testReducer(
  state: TestState | undefined,
  action: Action
): TestState {
  return reducer(state, action);
}

export const getTestState = createFeatureSelector<TestPartialState, TestState>(
  TEST_FEATURE_KEY
);

export const getShowMessage = createSelector(
  getTestState,
  (state) => state.showMessage
);
