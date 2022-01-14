import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashComponent } from './dash/dash.component';
import { UserComponent } from './user/user.component';
import { OrganisationComponent } from './organisation/organisation.component';

@NgModule({
  declarations: [
    AppComponent,
    DashComponent,
    UserComponent,
    OrganisationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
