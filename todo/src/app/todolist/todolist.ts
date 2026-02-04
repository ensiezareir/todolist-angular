import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-todolist',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todolist.html',
  styleUrls: ['./todolist.css'],
})
export class TodolistComponent {
  taskList = [
    {  name: 'Do something nice for someone I care about', completed: false },
  ];

  onSubmit(form: NgForm) {

    this.taskList.push({
        name : form.controls['task'].value,
        completed : false
    })
  }
  onDelete(index: number){
      this.taskList.splice(index,1);
  }
  onChange(index: number){
    console.log(this.taskList)
this.taskList[index].completed = !this.taskList[index].completed
  }
}
