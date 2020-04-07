import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllRecordsComponent } from './all-records/all-records.component';
import { LoginComponent } from './login/login.component';
import { AddComponent } from './add/add.component';


const routes: Routes = [
  {path : ``, component : LoginComponent},
  {path : `allRecords`, component : AllRecordsComponent, pathMatch : 'full'},
  {path : `add`, children: [
       {path : ``, component : AddComponent, data : {kind : 'add'}},
       {path : `edit/:id`, component : AddComponent, data : {kind : 'edit'}},
       {path : `copy/:id`, component : AddComponent, data : {kind : 'copy'}},
       {path : `view/:id`, component : AddComponent, data : {kind : 'view'}}
]
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
