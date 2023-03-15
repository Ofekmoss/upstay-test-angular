import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Header } from 'src/app/shared/header.model';

@Component({
  selector: 'app-sub-header',
  templateUrl: './sub-header.component.html',
  styleUrls: ['./sub-header.component.css'],
})
export class SubHeaderComponent implements OnInit {
  @Input() subHeader: [];
  deepHeadersList: [] = [];
  subHeaderName: string;


  constructor() { }

  ngOnInit(): void {
    this.subHeaderName = Object.keys(this.subHeader)[0];
    let headersTempList: [] = Object.values(this.subHeader)[0];
    if (headersTempList) {
      headersTempList.forEach(deepHeader => {
        this.deepHeadersList.push(deepHeader);
      })
    }
  }

}
