import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { GithubServiceService } from './github-service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { DashComponent } from './dash/dash.component';
import { OrganisationComponent } from './organisation/organisation.component';
import { RepositoryComponent } from './repository/repository.component';
import { TruncatePipe } from './truncate.pipe';

export class RepoArray {
  id: number | undefined;
  name: string | undefined;
  size: number | undefined;
  language: any;
  description: string | undefined;
  stargazers_count: number | undefined;
  watchers_count: number | undefined;
  forks_count: number | undefined;
  for: boolean | undefined;
  html_url: string | undefined;
}
@NgModule({
  declarations: [
  
    AppComponent,
    UserComponent,
    DashComponent,
    OrganisationComponent,
    RepositoryComponent,
    TruncatePipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [GithubServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }