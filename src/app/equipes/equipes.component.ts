import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
=======
import { Router } from '@angular/router';
import { Usuario } from '../modelo/usuario';
import { UsuarioService } from '../modelo/usuario.service';
>>>>>>> 2b6c7f6ff7d0fcca03f688973b146741c84badc0

@Component({
  selector: 'app-equipes',
  templateUrl: './equipes.component.html',
  styleUrls: ['./equipes.component.css']
})
export class EquipesComponent implements OnInit {

<<<<<<< HEAD
  constructor() { }

  ngOnInit() {
  }

}
=======
  usuario:Usuario[];

  constructor(private us: UsuarioService) { }

  ngOnInit() {
    this.us.dados().subscribe(
      res =>{
        this.usuario = res[""];
      }
    )
  }


}




>>>>>>> 2b6c7f6ff7d0fcca03f688973b146741c84badc0
