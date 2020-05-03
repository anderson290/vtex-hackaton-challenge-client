import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { CategoryComponent } from './category/category.component';
import { ListComponent } from './list/list.component';
import { MaterialCustomModule } from './modules/material-custom.module';
import { ItemComponent } from './category/item/item.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ConferenceComponent } from './conference/conference.component';
import { CameraComponent } from './conference/camera/camera.component';
import { ParticipantsComponent } from './conference/participants/participants.component';
import { RoomsComponent } from './conference/rooms/rooms.component';
import { SettingsComponent } from './conference/settings/settings.component';
import { DeviceSelectComponent } from './conference/settings/device-select/device-select.component';

import { FormsModule } from '@angular/forms';
import { HomeConferenceComponent } from './conference/home/home.component';
import { HelpComponent } from './help/help.component';
import { HelpItemComponent } from './help/help-item/help-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeConferenceComponent,
    CategoryComponent,
    ListComponent,
    ItemComponent,
    ConferenceComponent,
    CameraComponent,
    ParticipantsComponent,
    RoomsComponent,
    SettingsComponent,
    DeviceSelectComponent,
    HelpComponent,
    HelpItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialCustomModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
