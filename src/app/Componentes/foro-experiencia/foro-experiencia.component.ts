import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-foro-experiencia',
  templateUrl: './foro-experiencia.component.html',
  styleUrls: ['./foro-experiencia.component.css']
})
export class ForoExperienciaComponent implements OnInit {

  experiencias: any;
  constructor(private router: Router, private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getPosts().subscribe( posts => {
      this.experiencias = posts;
    });
  }

  goToExperiencia() {
    console.log('experiencias ', this.experiencias);
    this.router.navigate(['/comparte-tu-experiencia']);
  }

}
