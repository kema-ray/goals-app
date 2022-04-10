import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Goal } from '../goal';

@Component({
  selector: 'app-goal-form',
  templateUrl: './goal-form.component.html',
  styleUrls: ['./goal-form.component.css']
})
export class GoalFormComponent implements OnInit {
  
  newGoal = new Goal(0,"","",new Date());
  @Output() addGoal = new EventEmitter<Goal>();

  submitGoal(goalForm:NgForm){
    this.addGoal.emit(this.newGoal)
    // this.newGoal = new GoalItems(0,'',false,new Date())
  }
  constructor() { }

  ngOnInit() {
  }

}
