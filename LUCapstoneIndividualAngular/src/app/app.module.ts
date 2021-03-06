import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PeopleComponent } from './people/people.component';
import { AddEditPeopleComponent } from './people/add-edit-people/add-edit-people.component';
import { ShowPeopleComponent } from './people/show-people/show-people.component';
import { SharedService } from './shared.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

//These declarations are so that the application recognizes each of the components created inside the application. 
//These are autogenerated when the generate component command is issued
@NgModule({
  declarations: [
    AppComponent,
    PeopleComponent,
    AddEditPeopleComponent,
    ShowPeopleComponent
  ],
    //These are each of the modules used throughout the application being imported
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
    //the provider serves as the recognition for the service that connects the Angular application to the API
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
