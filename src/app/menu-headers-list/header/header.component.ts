import { Component, Input, OnInit } from '@angular/core';
import { Header } from 'src/app/shared/header.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() header: Header;

  constructor() { }

  ngOnInit(): void {
  }

}
