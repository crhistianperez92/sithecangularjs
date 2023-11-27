import {Component, Input} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {ModalsComponent} from "../modals/modals.component";
import {DialogServiceService} from "../../services/dialog-service.service";
import {ApisService} from "../../services/apis.service";

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {
    @Input() listaPokemon: any;

    constructor(private dialogService: DialogServiceService, private _api: ApisService) {
    }

  openDialogCustom(url: string){
      console.log(url);
      this._api.getPokemonDetail(url).subscribe(data => {
        this.dialogService.openDialogCustom(data);
      }, error => {
        console.log(error)
      });

  }
}
