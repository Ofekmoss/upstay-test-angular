import { Component, OnInit } from '@angular/core';
import headers_json from "../../assets/headers.json"
import { Header } from '../shared/header.model';

@Component({
  selector: 'app-menu-headers-list',
  templateUrl: './menu-headers-list.component.html',
  styleUrls: ['./menu-headers-list.component.css']
})
export class MenuHeadersListComponent implements OnInit {
  // headersData = {};
  headersList: Header[] =[]

  constructor() { }

  ngOnInit(): void {
    // this.headersData = headers_json;
    headers_json.forEach(header => {
      this.headersList.push(new Header(Object.keys(header)[0], Object.values(header)[0]));
    })
    console.log(this.headersList)
  }

}
