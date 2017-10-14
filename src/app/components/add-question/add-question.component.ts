import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Question } from '../../models/question';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {

  // we have this output where we are emitting the data from this component.
  @Output() questionAdded = new EventEmitter<Question>();
  text: string;
  answer: string;

  constructor() { }

  ngOnInit() { }
  addQuestion() {
    this.questionAdded.emit({text: this.text, answer: this.answer, hide: true});
  }
}
