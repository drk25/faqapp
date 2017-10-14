import { Injectable } from '@angular/core';
import { Question} from '../models/question';

@Injectable()
export class DataService {

  questions: Question[];

  constructor() {
   /* this.questions = [
      {

        text: 'What is your name?',
        answer: 'My name is Dan',
        hide: true
      },
      {

        text: 'What is your guild name?',
        answer: 'My guild name is GReat',
        hide: true
      },
      {

        text: 'Who is the leader?',
        answer: 'Jojo is the leader',
        hide: true
      }
    ];
    */
  }


  // get q from local storage. checks is empty then make array.
  // else add question from local storage using json parse
  // get q from LS
  getQuestions() {
    if(localStorage.getItem('questions') === null ){
      this.questions = [];
    } else {
      this.questions = JSON.parse(localStorage.getItem('questions'));
    }
    return this.questions;
  }

  // add q to LS
  addQuestion(question: Question) {
    this.questions.unshift(question);

    // init local var
    let questions;

    if(localStorage.getItem('questions') === null ) {
      questions = [];
      // push new question
      questions.unshift(question);
      // set new array to LS
      localStorage.setItem('questions', JSON.stringify(questions));
    } else {
      questions = JSON.parse(localStorage.getItem('questions'));
      // add new question
      questions.unshift(question);
      localStorage.setItem('questions', JSON.stringify(questions));
    }
  }

  // remove q from LS
  removeQuestion(question: Question) {
    for (let i = 0; i < this.questions.length; i++) {
      if(question == this.questions[i]) {
        this.questions.splice(i,1);
        localStorage.setItem('questions', JSON.stringify(this.questions));
      }
    }
}
}
