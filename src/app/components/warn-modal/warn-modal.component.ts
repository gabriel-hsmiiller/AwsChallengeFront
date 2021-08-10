import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

interface DialogData { 
  message: string;
  status: number;
}

@Component({
  selector: 'app-warn-modal',
  templateUrl: './warn-modal.component.html',
  styleUrls: ['./warn-modal.component.scss']
})
export class WarnModalComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit(): void {}

}
