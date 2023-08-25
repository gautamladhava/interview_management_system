import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatBadgeModule} from '@angular/material/badge';
import {MatSelectModule} from '@angular/material/select';
import {MatMenuModule} from '@angular/material/menu';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';

import { Component, ViewChild} from '@angular/core';
import { MatPaginatorModule} from '@angular/material/paginator';
import { MatSortModule} from '@angular/material/sort';
import { MatTableModule} from '@angular/material/table';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatRadioModule} from '@angular/material/radio';
import {MatTabsModule} from '@angular/material/tabs';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
const modual:any =[
  MatSortModule,
  MatFormFieldModule,MatDividerModule,
   MatInputModule,
   MatListModule,
    MatIconModule,
    MatTabsModule,
    MatButtonModule,
    MatBadgeModule,
    MatSelectModule,
    MatMenuModule,
    CanvasJSAngularChartsModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonToggleModule,
    MatSlideToggleModule,
    MatRadioModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    modual
  ],
  exports:[
    modual
  ]
})
export class ModualModule { }
