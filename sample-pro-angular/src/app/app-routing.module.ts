import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [{path:'',redirectTo:'login',pathMatch: 'full'},{path:'login',component:LoginComponent},
{path:'register',component:RegisterComponent},{path:'user-list/:name',component:UserListComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
