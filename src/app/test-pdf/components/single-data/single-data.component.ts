import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DataModel } from '../../interface/data-model';
import { FormsModule } from '@angular/forms';

import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-single-data',
  standalone: true,
  imports: [FormsModule, MatIconModule, MatButtonModule, MatInputModule, MatFormFieldModule],
  templateUrl: './single-data.component.html',
  styleUrl: './single-data.component.scss'
})
export class SingleDataComponent implements OnInit {
  @Input() item!: DataModel;
  @Output() pageChangeEvent = new EventEmitter<number>();
  @Output() saveCorrectedItem = new EventEmitter<DataModel>();
  
  originalItemValue: string = '';
  itemValue: string = '';
  isInputChanged: boolean = false;


  constructor() { }

  ngOnInit(): void {
    this.originalItemValue = this.item.value;
    this.itemValue = this.item.value;
  }

  onInputChange() {
    this.isInputChanged = this.itemValue != this.originalItemValue;
  }

  changePage(value: number) {
    this.pageChangeEvent.emit(value);
  }

  saveData(newItem: DataModel) {
    this.saveCorrectedItem.emit(newItem);
  }

  resetValue() {
    this.itemValue = this.originalItemValue;
    this.isInputChanged = false;
  }
  
}
