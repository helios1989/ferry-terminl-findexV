import { Component, OnInit , Input, OnChanges, Inject} from '@angular/core';
import { VehicleSummary } from 'src/app/models/VehicleSummary';
import  sumEarnings  from '../../utils/sumEarnings';
import { deleteByCategories,deleteById } from '../../stored/ferries/ferries.action';
import { Store } from '@ngrx/store'
@Component({
  selector: 'app-ferry',
  templateUrl: './ferry.component.html',
  styleUrls: ['./ferry.component.scss']
})
export class FerryComponent implements OnChanges {

  @Input()
  public ferries: VehicleSummary[] = [];
  smallCategory: VehicleSummary[] = [];
  largeCategory: VehicleSummary[] = [];
  largerWorkerEarns: number;
  smallWorkerEarns: number;
  largeTerminalEarns: number;
  smallTerminalEarns: number;
  displayedColumns: string[] = ['id', 'type', 'cost', 'action'];
  
  constructor(private store: Store) { }

  ngOnChanges() {
    this.smallCategory = this.ferries.filter((d)=> d.category === 'Small');
    this.largeCategory = this.ferries.filter((d) => d.category === 'Large');
    this.largerWorkerEarns  = sumEarnings(this.largeCategory, 'workerCommision');
    this.largeTerminalEarns = sumEarnings(this.largeCategory, 'cost');
    this.smallWorkerEarns  =  sumEarnings(this.smallCategory, 'workerCommision');
    this.smallTerminalEarns = sumEarnings(this.smallCategory, 'cost');
  }
  deleteAllbyCategory(category: string): void {
    this.store.dispatch(deleteByCategories({ props: category }));
  }

  deleteById(id: number): void {
    this.store.dispatch(deleteById({ props: id }));
  }
}
