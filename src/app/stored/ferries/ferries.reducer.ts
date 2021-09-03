import { Action, createReducer, on } from '@ngrx/store';
import { VehicleSummary } from 'src/app/models/VehicleSummary';
import { addFerries, deleteByCategories,deleteById } from './ferries.action';
import { appConstants } from 'src/app/constants/appConstant';
import checkFerryLimit from '../../utils/checkFerryLimit';
import  getMaxNumber from '../../utils/getMaxNumber';
export const initialState: VehicleSummary[] = [];

const _ferriesReducer = createReducer(initialState,
  on(addFerries, (state,payload) => {
    let ferries = payload['props'];
    const maxLimit = ferries.category === 'Large'
         ? appConstants.maxLimitLargeFerry 
         : appConstants.maxLimitSmallFerry;
    if (checkFerryLimit(state,'category',ferries.category,maxLimit)) {
        alert(` ${ferries.category} category vehicle is already full`);
        return state;
    } else  {
        ferries = {...ferries, id: getMaxNumber(state,'id')}
    }
    return[...state, ferries];
  }),
  on(deleteByCategories, (state,payload) => {
    const categoryType = payload['props'];
    let newState = state.filter((d) => d.category !== categoryType);
    return newState;
  }),
  on(deleteById, (state,payload) => {
    const id = payload['props'];
    let newState = state.filter((d) => d.id !== id);
    return newState;
  }),
);

export function ferriesReducer(state: any, action: Action) {
  return _ferriesReducer(state, action);
}