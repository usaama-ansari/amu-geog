import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';



@Injectable()

export class DataStoreService {


  date_time_subject = new Subject<{ currentDate: string, currentTime: string }>();
  // voltage_subject = new Subject<{ voltage: string }>();
  
  constructor() { }



}
