import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { NgModule } from "@angular/core";
import { FerryTerminalComponent } from "./features/ferryterminal/ferry.terminal.component";
import { AppComponent } from "./app.component";
import { VehicleService } from "./services/vehicle.service";

import { AppRoutingModule } from "./app.routing.module";
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { AppSharedMaterialModule } from "./shared/app-shared-material.module";
import { VEHICLE_PROVIDER } from "./interfaces/iVehicle.provider";
import { VehicleComponent } from './components/vehicle/vehicle.component';
import { FerryComponent } from './components/ferry/ferry.component';
import { StoreModule } from '@ngrx/store';
import { ferriesReducer } from './stored/ferries/ferries.reducer';
@NgModule({
  declarations: [AppComponent, FerryTerminalComponent, MainLayoutComponent, VehicleComponent, FerryComponent],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    AppSharedMaterialModule,
    StoreModule.forRoot({ferries: ferriesReducer}),
  ],
  providers: [
    { provide: VEHICLE_PROVIDER, useClass: VehicleService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
