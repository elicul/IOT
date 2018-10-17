import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { RouterStateUrl } from '../models/router-state-url.model';
import * as fromRouter from '@ngrx/router-store';
import * as fromUi from './ui/ui.reducer';
// tslint:disable-next-line:no-implicit-dependencies
import { storeFreeze } from 'ngrx-store-freeze';

export interface State {
  router: fromRouter.RouterReducerState<RouterStateUrl>;
  ui: fromUi.State;
}

export const reducers: ActionReducerMap<State> = {
  router: fromRouter.routerReducer,
  ui: fromUi.reducer,
};

export const getUiState = createFeatureSelector<fromUi.State>('ui');
export const getIsLoading = createSelector(getUiState, fromUi.getIsLoading);

export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
  return (state: State, action: any): State => {
    return reducer(state, action);
  };
}

export const metaReducers: Array<MetaReducer<State>> = !environment.production ? [logger, storeFreeze]  : [];
