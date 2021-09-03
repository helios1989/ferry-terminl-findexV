import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({providedIn: 'root'})
export class AppService {
    isNewVechile:  BehaviorSubject<Boolean> = new BehaviorSubject<Boolean>(false);
}