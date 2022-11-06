import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contatti',
  templateUrl: './contatti.component.html',
  styleUrls: ['./contatti.component.css']
})
export class ContattiComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  isRegisterVisible:boolean = true

  isMessageVisible:boolean = false

  onSubmit(form:NgForm){
    console.log(form)
    this.isRegisterVisible = false
    this.isMessageVisible = true
  }

}
