import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() title: string;
  @Input() content: string;
  editing = false;

  editCard() {
    this.editing = true;
  }

  saveCard() {
    // save card changes
    this.editing = false;
  }

  cancelEdit() {
    // discard changes
    this.editing = false;
  }
}
