import { createAction, props } from '@ngrx/store';
import { VehicleSummary } from 'src/app/models/VehicleSummary';

export const addFerries = createAction('addFerries', props<{ props: VehicleSummary }>());
export const deleteByCategories = createAction('deleteByCategories', props<{ props: String }>());
export const deleteById = createAction('deleteById', props<{ props: number }>());