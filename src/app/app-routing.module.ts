import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddUserComponent } from './customer/add-user/add-user.component';
import { ShowUsersComponent } from './customer/show-users/show-users.component';
import { SearchComponent } from './customer/search/search.component';

const routes: Routes = [
  { path: '', redirectTo: 'add', pathMatch: 'full' },
  { path: 'add', component: AddUserComponent },
  { path: 'users', component: ShowUsersComponent },
  { path: 'search', component: SearchComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
