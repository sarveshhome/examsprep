import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageHeaderComponent } from './core/page-header/page-header.component';
import { PageFooterComponent } from './core/page-footer/page-footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { IndexComponent } from './components/index/index.component';
import { MatMenuModule, MatCardModule, MatButtonModule, MatIconModule,
        MatCheckboxModule, MatRippleModule, MatInputModule, MatFormFieldModule,
        MatToolbarModule, MatSidenavModule, MatListModule ,
        MatStepperModule  } from '@angular/material';

import { ExamsComponent } from './components/exams/exams.component';
import { AdminComponent } from './components/admin/admin.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { ExaminerComponent } from './components/examiner/examiner.component';
import { OldexamComponent } from './components/oldexam/oldexam.component';
import { NewexamComponent } from './components/newexam/newexam.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    PageHeaderComponent,
    PageFooterComponent,
    HomeComponent,
    IndexComponent,
    ExamsComponent,
    AdminComponent,
    AboutComponent,
    ContactComponent,
    ExaminerComponent,
    OldexamComponent,
    NewexamComponent
  ],
  exports: [
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatMenuModule,
    MatListModule
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatToolbarModule, MatSidenavModule, MatListModule ,
    MatStepperModule,NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
