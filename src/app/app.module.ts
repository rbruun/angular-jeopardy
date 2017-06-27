import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http'

import { AppComponent } from './app.component';
<<<<<<< HEAD
import { QuestionComponent } from './question/question.component';
import { ScoreComponent } from './score/score.component';
=======
import { JeopardyService } from './jeopardy.service';
>>>>>>> 6e2edcb94615f5322ac49d7918d20cacd5f06d98

@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    ScoreComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [ JeopardyService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
