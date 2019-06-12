import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { Router} from '@angular/router';
import { from } from 'rxjs';
=======
import { Router } from '@angular/router';
>>>>>>> 2b6c7f6ff7d0fcca03f688973b146741c84badc0

@Component({
  selector: 'app-regulamento',
  templateUrl: './regulamento.component.html',
  styleUrls: ['./regulamento.component.css']
})
export class RegulamentoComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }
  regulamento(){
    this.router.navigateByUrl('regulamento')
  }

  equipes(){
    this.router.navigateByUrl('equipes')
  }

  resultados(){
    this.router.navigateByUrl('resultados')
  }
<<<<<<< HEAD
=======


>>>>>>> 2b6c7f6ff7d0fcca03f688973b146741c84badc0
}
