import { Component } from '@angular/core';

import { JeopardyService } from './jeopardy.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Jeopardy Lite!';
  question;
  constructor(private jeopardyService: JeopardyService) {

  }

    getQuestion(){
    this.jeopardyService.getRandomQuestion()
      .subscribe(
        question => {this.question = question[0]; console.log(this.question);},
        error =>  {});  
  }

  ngOnInit() {
   this.getQuestion();
  }
  
}
