import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './user/search/search.component';
import { AddUserComponent } from './user/add-user/add-user.component';
import { UserDetailsComponent } from './user/user-details/user-details.component';
import { ShowUsersComponent } from './user/show-users/show-users.component';
import { ElasticsearchService } from './elastic-search.service';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    AddUserComponent,
    UserDetailsComponent,
    ShowUsersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [ElasticsearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
