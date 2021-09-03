import { InjectionToken } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { VehicleSummary } from "../models/VehicleSummary";
import { VehicleSize } from "./enums/vehicleSize.enum";
import { VehicleType } from "./enums/vehicleType.enum";


export const VEHICLE_PROVIDER = new InjectionToken("IVehicleProvider");

export interface IVehicleProvider {
  GetVehicle(): VehicleSummary;
  CostForVehicle(vehicleType: VehicleType): number;
  workerCommision(cost: number) : number;
}

