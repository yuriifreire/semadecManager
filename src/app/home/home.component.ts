import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
=======
import { Router } from '@angular/router';
>>>>>>> 2b6c7f6ff7d0fcca03f688973b146741c84badc0

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

<<<<<<< HEAD
  constructor() { }
=======
  constructor(public router: Router) { }
>>>>>>> 2b6c7f6ff7d0fcca03f688973b146741c84badc0

  ngOnInit() {
  }

<<<<<<< HEAD
=======
  regulamento(){
    this.router.navigateByUrl('regulamento')
  }

  equipes(){
    this.router.navigateByUrl('equipes')
  }

  resultados(){
    this.router.navigateByUrl('resultados')
  }
>>>>>>> 2b6c7f6ff7d0fcca03f688973b146741c84badc0
}
