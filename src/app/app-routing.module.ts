import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './components/index/index.component';
import { ExamsComponent } from './components/exams/exams.component';
import { AboutComponent } from './components/about/about.component';
import { AdminComponent } from './components/admin/admin.component';
import { ContactComponent } from './components/contact/contact.component';
import { ExaminerComponent } from './components/examiner/examiner.component';
import { OldexamComponent } from './components/oldexam/oldexam.component';
import { NewexamComponent } from './components/newexam/newexam.component';



const routes: Routes = [
  { path: '', redirectTo: '/Index', pathMatch: 'full'},
  { path: 'Index', component: IndexComponent },
  { path: 'exams', component: ExamsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent},
  { path: 'admin', component: AdminComponent},
  { path: 'examiner', component: ExaminerComponent },
  { path: 'oldexam', component:  OldexamComponent},
  { path: 'newexam', component:  NewexamComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
