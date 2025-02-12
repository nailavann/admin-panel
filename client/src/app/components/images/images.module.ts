import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ImagesComponent} from "./images.component";
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {path: '', component: ImagesComponent},
];

@NgModule({
  declarations: [ImagesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})

export class ImagesModule {
}
