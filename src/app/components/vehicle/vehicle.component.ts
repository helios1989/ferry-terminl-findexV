import { Component, OnInit, Input } from '@angular/core';
import { VehicleType } from 'src/app/interfaces/enums/vehicleType.enum';
import { VehicleService } from '../../services/vehicle.service';
import { addFerries } from '../../stored/ferries/ferries.action';
import { select, Store } from '@ngrx/store'
import { VehicleSummary } from 'src/app/models/VehicleSummary';
import { AppService } from '../../services/app.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.scss']
})
export class VehicleComponent implements OnInit {
  @Input()
  public vehicle: VehicleSummary;
  ferries: VehicleSummary[];
  constructor(
    private appService: AppService,
    private store: Store) {}

  loadVehicle(): void {
      this.store.dispatch(addFerries({ props: this.vehicle }));
      this.appService.isNewVechile.next(false);
  }
  ngOnInit() {

  }
}
