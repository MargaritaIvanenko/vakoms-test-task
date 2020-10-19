import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {ModalConfigurationComponent} from './modal-configuration/modal-configuration.component';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {MatTableDataSource} from '@angular/material/table';

export interface ColumnElem {
  name: string;
  surname: string;
  address: string;
  phone: number;
  email: string;
  status: string;
  sex: string;
  language: string;
}

const ELEMENT_DATA: ColumnElem[] = [
  {
    name: 'John',
    surname: 'Ramsey',
    address: 'Lviv',
    phone: 101,
    email: 'some@gmail.com',
    status: 'active',
    sex: 'male',
    language: 'Ukrainian'
  },
  {
    name: 'Hanna',
    surname: 'Ramsey',
    address: 'Lviv',
    phone: 102,
    email: 'some@gmail.com',
    status: 'active',
    sex: 'female',
    language: 'Ukrainian'
  },
  {
    name: 'Helen',
    surname: 'Ramsey',
    address: 'Kyiv',
    phone: 103,
    email: 'some@gmail.com',
    status: 'active',
    sex: 'female',
    language: 'Ukrainian'
  },
  {
    name: 'Peter',
    surname: 'Ramsey',
    address: 'Odesa',
    phone: 104,
    email: 'some@gmail.com',
    status: 'active',
    sex: 'male',
    language: 'Ukrainian'
  },
  {
    name: 'Alex',
    surname: 'Ramsey',
    address: 'Dnipro',
    phone: 105,
    email: 'some@gmail.com',
    status: 'active',
    sex: 'male',
    language: 'Ukrainian'
  }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  displayedColumns: string[] = ['name', 'surname', 'phone', 'status'];
  columns: any[] = [
    {
      name: 'name',
      title: 'Name.',
    },
    {
      name: 'surname',
      title: 'Surname',
    },
    {
      name: 'phone',
      title: 'Phone'
    },
    {
      name: 'status',
      title: 'Status'
    },
    {
      name: 'address',
      title: 'Address'
    },
    {
      name: 'email',
      title: 'Email'
    },
    {
      name: 'sex',
      title: 'Sex'
    },
    {
      name: 'language',
      title: 'Language'
    }
  ];

  constructor(public dialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  openModal() {
    let columnNames = this.columns.map((item) => {
      return item['name'];
    });
    const dialogRef = this.dialog.open(ModalConfigurationComponent, {
      data: {
        displayedColumns: this.displayedColumns,
        allColumns: columnNames
      },
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.displayedColumns = result;
      }
    });
  }

  tableDrop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.displayedColumns, event.previousIndex, event.currentIndex);
  }
}

