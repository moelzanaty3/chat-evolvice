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
import { ContactProfileComponent } from './_components/chat/contact-profile/contact-profile.component';
import { MessagesComponent } from './_components/chat/messages/messages.component';
import { MessageInputComponent } from './_components/chat/message-input/message-input.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, MapComponent, ChatComponent, ContactProfileComponent, MessagesComponent, MessageInputComponent],
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
