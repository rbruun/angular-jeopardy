import { Component, OnInit, Input } from '@angular/core';
import { JeopardyService } from '../jeopardy.service'

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  userAnswer: string;
  rollingScore = 0;
  categories: any[] = [];
  numOfCategories = 3;
  question;

  constructor(private jeopardyService: JeopardyService) { }

  getQuestion(){
    this.jeopardyService.getRandomQuestion()
      .subscribe(
        question => {this.question = question[0]; console.log(this.question);},
        error =>  {});  
  }

  validateReturnedData(id: string) {
    console.log(this.question.answer);
    if (this.question.value = "200") {
      this.getCatQuestion(id);
    }
  }

  checkAnswer() {
    if (this.userAnswer === this.question.answer) {
      this.rollingScore += parseInt(this.question.value);
    } 
    this.getCategories();
    this.question = null;
    this.userAnswer = "";
  }

  getCatQuestion(id: string) {
    this.jeopardyService.getQuestionByCategory(id)
      .subscribe(
        question => {this.question = question[0]; console.log(this.question);this.validateReturnedData(id)},
        error =>  {});  
  }

  getCategories() {
    this.categories = [];
    for (var i = 0; i < this.numOfCategories; i++) {
      this.jeopardyService.getRandomCategory()
      .subscribe(
        category => {this.categories.push(category[0]);
        },
        error =>  {});
    }
  }

  ngOnInit() {
    this.getCategories();
      
    }
    
    


}
