import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataStoreService } from '../services/data-store.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  date_time_subscription: Subscription;
  voltage_data_subscription: Subscription;
  date_time: object;
  //voltage_data: object;
  constructor(
    public _dataStoreService: DataStoreService
  ) { }

  ngOnInit() {
    this.date_time_subscription = this._dataStoreService.date_time_subject.subscribe((data) => {
      this.date_time = data;
    });
    // this.voltage_data_subscription = this._dataStoreService.voltage_subject.subscribe((data) => {
    //   this.voltage_data = data;
    // })


  }

  ngOnDestroy() {
    this.date_time_subscription.unsubscribe();
   // this.voltage_data_subscription.unsubscribe();
  }

}
