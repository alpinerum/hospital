import { Component } from '@angular/core';
import { TotalCountServiceService } from './total-count-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private _totalCount: TotalCountServiceService) {
  }
  number = this._totalCount.getTotal();
}
