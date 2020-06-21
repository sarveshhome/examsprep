import { Component, OnInit } from '@angular/core';
import { NewExamService } from 'src/app/services/newExam.service';
import { Subscription } from 'rxjs';
import { FormControl } from '@angular/forms';
import { QnaResult } from 'src/app/model/qna-result.model';

@Component({
  selector: 'app-oldexam',
  templateUrl: './oldexam.component.html',
  styleUrls: ['./oldexam.component.css']
})
export class OldexamComponent{
  subscription: Subscription;
  results : QnaResult;
  constructor(private dataservice: NewExamService) {
    this.subscription = this.dataservice.getApi("/question/202006110945AM-60","questions").subscribe(message => {
        console.log(message);
        this.results = message;
    });
   }
}

