import { Component, OnInit } from '@angular/core';
import headers_json from "../../assets/headers.json"

@Component({
  selector: 'app-menu-headers-list',
  templateUrl: './menu-headers-list.component.html',
  styleUrls: ['./menu-headers-list.component.css']
})
export class MenuHeadersListComponent implements OnInit {
  headersData = {};

  constructor() { }

  ngOnInit(): void {
    this.headersData = headers_json;
  }

}
