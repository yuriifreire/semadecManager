import { Component, OnInit } from '@angular/core';
import { Usuario } from '../models/usuario';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.css']
})
export class CadastroUsuarioComponent implements OnInit {

  usuario:Usuario;

  constructor(private us: UsuarioService) { 
    this.usuario = new Usuario();
  }

  ngOnInit() {
  }

  cadastrar(){
    console.log(this.usuario)
    this.us.cadastro(this.usuario).subscribe(
      res =>{
        this.usuario = res;
      }
    )
  }

}
