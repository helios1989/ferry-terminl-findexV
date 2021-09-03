import { Component, Inject } from "@angular/core";
import { VehicleSummary } from "src/app/models/VehicleSummary";
import {
  IVehicleProvider,
  VEHICLE_PROVIDER
} from '../../interfaces/iVehicle.provider';

import { Store,select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppService } from '../../services/app.service';
import { Subscription } from 'rxjs';

@Component({
  selector: "ferry-terminal",
  templateUrl: "./ferry.terminal.component.html",
  styleUrls: ["./ferry.terminal.component.scss"]
})
export class FerryTerminalComponent {
  currentVehicle: VehicleSummary;
  ferries$!: Observable<VehicleSummary[]>;
  isNewVehicleSubscirption: Subscription = new Subscription();
  isNewVehicle: Boolean = false;
  constructor(
    @Inject(VEHICLE_PROVIDER) private vehicleProvider: IVehicleProvider,
    private store: Store<{ ferries: any[] }>,
    private appService: AppService
  ) {
    this.ferries$ = this.store.pipe(select("ferries"));
  }

  public getVehicle() {
    const currentVehicle: VehicleSummary  = this.vehicleProvider.GetVehicle();
    const cost:number = this.vehicleProvider.CostForVehicle(currentVehicle.type);
    const workerCommision: number = this.vehicleProvider.workerCommision(cost);
    const costWorker = {cost,workerCommision};
    this.currentVehicle = {...currentVehicle, ...costWorker}
    this.appService.isNewVechile.next(true);
  }
  ngOnChanges() {

  }
  ngOnInit(): void {
    this.isNewVehicleSubscirption = this.appService.isNewVechile.subscribe((data) => {
      this.isNewVehicle = data;
    })
  }
  ngOnDestroy(): void {
    this.isNewVehicleSubscirption.unsubscribe();
  }
}