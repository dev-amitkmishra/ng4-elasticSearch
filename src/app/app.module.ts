import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './customer/search/search.component';
import { AddUserComponent } from './customer/add-user/add-user.component';
import { UserDetailsComponent } from './customer/user-details/user-details.component';
import { ShowUsersComponent } from './customer/show-users/show-users.component';
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
