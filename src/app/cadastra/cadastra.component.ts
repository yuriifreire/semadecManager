import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { Atleta } from '../models/atleta';
import { AtletaService } from '../services/atleta.service';
=======
import { Usuario } from '../modelo/usuario';
import { UsuarioService } from '../modelo/usuario.service';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
>>>>>>> 2b6c7f6ff7d0fcca03f688973b146741c84badc0

@Component({
  selector: 'app-cadastra',
  templateUrl: './cadastra.component.html',
  styleUrls: ['./cadastra.component.css']
})
export class CadastraComponent implements OnInit {

<<<<<<< HEAD
  private atleta: Atleta;

  constructor(private at: AtletaService) { 
    this.atleta = new Atleta();
  }

  ngOnInit() {
  }

  adicionar(){
    console.log(this.atleta)
    this.at.atletas_get().subscribe(
      res =>{
        this.atleta = res;
      }
    )
    
  }

=======
  usuario: Usuario;
  //usuarios: any;

  constructor(private as: UsuarioService) {
    this.usuario = new Usuario();
    //this.listaUsuario = [];
  }


  ngOnInit() {
  }

  adicionar() {
    this.as.cadastro(this.usuario).subscribe(
      res => {
        this.usuario = res;
      }
    )
  }




>>>>>>> 2b6c7f6ff7d0fcca03f688973b146741c84badc0
}
