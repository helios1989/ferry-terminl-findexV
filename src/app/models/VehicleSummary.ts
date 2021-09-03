import { VehicleSize } from "../interfaces/enums/vehicleSize.enum";
import { VehicleType } from "../interfaces/enums/vehicleType.enum";

export class VehicleSummary {
    id?: number;
    type: VehicleType;
    category: VehicleSize;
    cost?: number;
    workerCommsion?: number;
  }