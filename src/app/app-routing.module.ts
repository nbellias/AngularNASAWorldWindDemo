import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OverallMapComponent } from './overall-map/overall-map.component';

const routes: Routes = [
  { path: '', component: OverallMapComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
