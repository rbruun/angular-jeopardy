import { Component, OnInit, Input } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  userAnswer: string;
  rollingScore = 0;

  constructor(private appComponent: AppComponent) { }

  @Input() question;

  checkAnswer() {
    if (this.userAnswer === this.question.answer) {
      this.rollingScore += parseInt(this.question.value);
    } 
    this.appComponent.getQuestion();
    this.userAnswer = "";
    
  }

  ngOnInit() {
  }

}
