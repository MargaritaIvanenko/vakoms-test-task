import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {AppComponent} from '../app.component';

@Component({
  selector: 'app-modal-configuration',
  templateUrl: './modal-configuration.component.html',
  styleUrls: ['./modal-configuration.component.css']
})
export class ModalConfigurationComponent implements OnInit {
  showSelected: boolean;
  checkedArr = [];

  constructor(public dialogRef: MatDialogRef<AppComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
    this.showSelected = false;
  }

  ngOnInit(): void {
    this.checkedArr.push(...this.data.displayedColumns);
  }

  onChangeState(event, item) {
    if (event.checked == true) {
      this.checkedArr.push(item);
    } else {
      this.checkedArr.splice(this.checkedArr.indexOf(item), 1);
    }
  }

  addColumn(): void {
    this.dialogRef.close(this.checkedArr);
  }
}
