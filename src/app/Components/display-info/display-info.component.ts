import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Question} from "../../Class/question/question";

@Component({
  selector: 'app-display-info',
  templateUrl: './display-info.component.html',
  styleUrls: ['./display-info.component.css']
})
export class DisplayInfoComponent{

  constructor(public dialogRef: MatDialogRef<DisplayInfoComponent>,
              @Inject(MAT_DIALOG_DATA) public data: {element: Question}) {

  }

  cancel(){
    this.dialogRef.close();
  }


}
