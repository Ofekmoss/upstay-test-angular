import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuHeadersListComponent } from './menu-headers-list/menu-headers-list.component';
import { HeaderComponent } from './menu-headers-list/header/header.component';
import { SubHeaderComponent } from './menu-headers-list/header/sub-header/sub-header.component';
import { CardComponent } from './card/card.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MenuHeadersListComponent,
    HeaderComponent,
    SubHeaderComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
