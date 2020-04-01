import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllRecordsComponent } from './all-records/all-records.component';
import { LoginComponent } from './login/login.component';
import { AddComponent } from './add/add.component';
import { GetUserComponent } from './get-user/get-user.component';


const routes: Routes = [
  {path : ``, component : LoginComponent},
  {path : `allRecords`, component : AllRecordsComponent},
  {path : `add`, component : AddComponent},
  {path : `users/:id`, component : GetUserComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
