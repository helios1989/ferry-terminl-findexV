import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FerryTerminalComponent } from './features/ferryterminal/ferry.terminal.component';

const routes: Routes = [
  { path: '', component: FerryTerminalComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }