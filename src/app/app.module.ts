import { AppRoutingModule } from './_core/app-routing.module';
import { AppMaterialModule } from './_core/app-material.module';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent, MapComponent, ChatComponent } from './_components';
import { AgmCoreModule } from '@agm/core';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [AppComponent, HomeComponent, MapComponent, ChatComponent],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    AppRoutingModule,
    AppMaterialModule,
    AgmCoreModule.forRoot({
      apiKey: `${environment.googleMapApiKey}`
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
