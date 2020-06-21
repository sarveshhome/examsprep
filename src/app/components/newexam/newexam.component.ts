import { Component, OnInit } from '@angular/core';
import { NewExamService } from 'src/app/services/newExam.service';
import { Subscription } from 'rxjs';
import { FormControl } from '@angular/forms';
import { QnaResult } from 'src/app/model/qna-result.model';
import { element } from 'protractor';

@Component({
  selector: 'app-newexam',
  templateUrl: './newexam.component.html',
  styleUrls: ['./newexam.component.css']
})
export class NewexamComponent{
  subscription: Subscription;
  results : [];
  finalresult: finalResult[] = [];
  originalQuestionAndAnswer: [];
  config: any;
  constructor(private dataservice: NewExamService) {

   }

   ngOnInit() {
        this.getQuestions();
   }

   getQuestions(){
    this.subscription = this.dataservice.getApi("/question/202006110945AM-60","questions").subscribe(message => {
      console.log(message.qnAs);
      this.results = message.qnAs;
      this.originalQuestionAndAnswer = message.qnAs;
      this.config = {
        itemsPerPage: 5,
        currentPage: 1,
        totalItems: this.results.length
      };
  });

   }

   pageChanged(event){
    this.config.currentPage = event;
    }
   submitQuestion(value){
       console.log('id: '+ value.id);
    //  this.removeDocument(value);
    this.finalresult.forEach( (item, index) =>
    {
      console.log(item);
      if(item === value)
      {
        this.finalresult.splice(index,1);
      }
    });

    this.finalresult.push(value);

    if (Array.isArray(this.finalresult) && this.finalresult.length==0) {
      this.finalresult.push(value);
    }
    console.log(this.finalresult);

   }

   removeDocument(doc){
     console.log('doc: ' + doc);
    this.finalresult.forEach( (item, index) => {
      if(item === doc)
      {this.finalresult.splice(index,1);}
      else{
        this.finalresult.push(doc);
      }
    });
 }

}
export class finalResult {
  constructor(id: string, que: string, ans: string) {

  }
}



