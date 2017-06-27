import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http'
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { QuestionComponent } from './question/question.component';
import { ScoreComponent } from './score/score.component';
import { JeopardyService } from './jeopardy.service';

@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    ScoreComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [ JeopardyService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
