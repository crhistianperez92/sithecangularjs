import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {parseJson} from "@angular/cli/src/utilities/json-file";

@Component({
  selector: 'app-modals',
  templateUrl: './modals.component.html',
  styleUrls: ['./modals.component.css']
})
export class ModalsComponent {
  pokemon: any;
   constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
     this.pokemon = data;
     console.log(data);
  }

  guardarFavorito(){
     let favoritos = localStorage.getItem("favoritos")

  }
}
