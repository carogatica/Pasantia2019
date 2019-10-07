import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'] 
})
export class FormularioComponent implements OnInit {
  experienceForm: FormGroup;

  constructor( private formBuilder: FormBuilder ) { }

  ngOnInit() {
    this.experienceForm = this.formBuilder.group({
      schoolName: [''],
      companyName: [''],
      duration: [''],
      career: [''],
      experienceFeedback: [''],
      email: [''],
      username: ['']
    });
  }

  sendData() {
    console.log('estos son los datos del form', this.experienceForm.value)
  }

}