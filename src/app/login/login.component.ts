import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { Usuario } from '../models/usuario';
=======
import { Router } from '@angular/router';
import { Usuario } from '../modelo/usuario';

import { Observable} from 'rxjs';
import { from } from 'rxjs';
>>>>>>> 2b6c7f6ff7d0fcca03f688973b146741c84badc0

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

<<<<<<< HEAD
  usuario: Usuario;

  constructor() {
    this.usuario = new Usuario();
=======
  usuario: Usuario = new Usuario();
  results: Observable<any>;
  matricula: '';
  senha: '';

  constructor(public router: Router) {
>>>>>>> 2b6c7f6ff7d0fcca03f688973b146741c84badc0
   }

  ngOnInit() {
  }

<<<<<<< HEAD
  login(){
    console.log(this.usuario)
=======
  loginUser(){

    this.router.navigateByUrl('home');
    console.log(this.usuario);
  }

  cadastrarUser(){
    this.router.navigateByUrl('cadastrar');
>>>>>>> 2b6c7f6ff7d0fcca03f688973b146741c84badc0
  }

}
