import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from "./home.component";
import {HomeRouting} from "./home.routing";
import {HeaderComponent} from "../../components/views/header/header.component";


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRouting,
    HeaderComponent
  ]
})
export class HomeModule {
}
