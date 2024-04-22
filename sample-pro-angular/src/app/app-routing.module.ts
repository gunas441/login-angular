import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { UserListComponent } from './user-list/user-list.component';
import { UpdateRegisterComponent } from './update-register/update-register.component';

const routes: Routes = [{path:'',redirectTo:'login',pathMatch: 'full'},{path:'login',component:LoginComponent},
{path:'register',component:RegisterComponent},{path:'user-list',component:UserListComponent}
,{path:'update/:regId',component:UpdateRegisterComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
