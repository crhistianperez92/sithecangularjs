import { Component } from '@angular/core';
import {ApisService} from "./services/apis.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'apisangular';
  responseData: any;
  btnPrev: string = '';
  btnNext: string = '';

  constructor(private _api: ApisService) {
  }
  ngAfterViewInit() {
    this._api.getPokemon().subscribe(data => {
      console.log(data)
      this.btnNext = data.next;
      this.btnPrev = data.previous;
      this.responseData = data.results;
    }, error => {
      console.log(error)
    });
  }


}
