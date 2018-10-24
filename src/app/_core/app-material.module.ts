import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatToolbarModule,
  MatFormFieldModule,
  MatTabsModule
} from '@angular/material';

@NgModule({
  imports: [
    MatTabsModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule,
    MatFormFieldModule
  ],
  exports: [
    MatTabsModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule,
    MatFormFieldModule
  ]
})
export class AppMaterialModule {}
