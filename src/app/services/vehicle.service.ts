import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { VehicleSize } from "../interfaces/enums/vehicleSize.enum";
import { VehicleType } from "../interfaces/enums/vehicleType.enum";
import {
  IVehicleProvider,
} from "../interfaces/iVehicle.provider";
import { VehicleSummary } from "../models/VehicleSummary";
import { appConstants } from "../constants/appConstant";

@Injectable()
export class VehicleService implements IVehicleProvider {

  GetVehicle(): VehicleSummary {
    const randomNumber = Math.floor(Math.random() * 4) + 1;

    switch (randomNumber) {
      case 1: {
        return {
          type: VehicleType.car,
          category: VehicleSize.small
        };
      }
      case 2: {
        return {
          type: VehicleType.van,
          category: VehicleSize.small
        };
      }
      case 3: {
        return {
          type: VehicleType.truck,
          category: VehicleSize.large
        };
      }
      default: {
        return {
          type: VehicleType.bus,
          category: VehicleSize.large
        };
      }
    }
  }

  CostForVehicle(vehicle: VehicleType)  {
    switch (vehicle) {
      case VehicleType.car:
        return appConstants.carCostVehicleType;
      case VehicleType.van:
        return appConstants.vanCostVehicleType;
      case VehicleType.truck:
        return appConstants.truckVehicleType;
      case VehicleType.bus:
        return appConstants.busVehicleType;
      default:
        throw new Error("No vehicle type found");
    }
  };
  workerCommision(cost: number) : number {
    return  (cost * appConstants.commissionPercentage) / 100;
  }

}
