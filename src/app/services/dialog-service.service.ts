import { Injectable } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {ModalsComponent} from "../components/modals/modals.component";

@Injectable({
  providedIn: 'root'
})
export class DialogServiceService {

  constructor(private modalDialog: MatDialog) {
  }

  openDialogCustom(data: any){
    this.modalDialog.open(ModalsComponent, {data: data});
  }
}
