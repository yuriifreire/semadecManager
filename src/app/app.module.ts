import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { MatButtonModule, MatCheckboxModule } from '@angular/material';

<<<<<<< HEAD
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BasqueteComponent } from './basquete/basquete.component';
import { FutebolDeSeteComponent } from './futebol-de-sete/futebol-de-sete.component';
import { VoleibolComponent } from './voleibol/voleibol.component';
import { FutsalComponent } from './futsal/futsal.component';
import { XadrezComponent } from './xadrez/xadrez.component';
import { TenisDeMesaComponent } from './tenis-de-mesa/tenis-de-mesa.component';
import { NatacaoComponent } from './natacao/natacao.component';
import { RegulamentoComponent } from './regulamento/regulamento.component';
import { HomeComponent } from './home/home.component';
import { EquipesComponent } from './equipes/equipes.component';
import { LoginComponent } from './login/login.component';
import { ResultadosComponent } from './resultados/resultados.component';
import { CadastraComponent } from './cadastra/cadastra.component';
import { LoginUsuarioComponent } from './login-usuario/login-usuario.component';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { HttpClientModule } from '@angular/common/http';
=======
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
//import { routing } from './app-routing.module';
import { from } from 'rxjs';
import { HttpClientModule} from '@angular/common/http'



import { CadastraComponent } from './cadastra/cadastra.component';
import { LoginComponent } from './login/login.component';
import { ExibirComponent } from './exibir/exibir.component';
import { HomeComponent } from './home/home.component';
import { ResultadosComponent } from './resultados/resultados.component';
import { RegulamentoComponent } from './regulamento/regulamento.component';
import { EquipesComponent } from './equipes/equipes.component';
import { AutenticacaoComponent } from './autenticacao/autenticacao.component';
//import { AuthService } from './services/auth.service';
import { BasqueteComponent } from './basquete/basquete.component';
import { Futebolde7Component } from './futebolde7/futebolde7.component';
import { FutsalComponent } from './futsal/futsal.component';
import { QueimadaComponent } from './queimada/queimada.component';
import { VoleibolComponent } from './voleibol/voleibol.component';
import { FifaComponent } from './fifa/fifa.component';
import { FortniteComponent } from './fortnite/fortnite.component';
import { CsgoComponent } from './csgo/csgo.component';
import { LolComponent } from './lol/lol.component';
import { UsuarioService } from './modelo/usuario.service';


>>>>>>> 2b6c7f6ff7d0fcca03f688973b146741c84badc0

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    BasqueteComponent,
    FutebolDeSeteComponent,
    VoleibolComponent,
    FutsalComponent,
    XadrezComponent,
    TenisDeMesaComponent,
    NatacaoComponent,
    RegulamentoComponent,
    HomeComponent,
    EquipesComponent,
    LoginComponent,
    ResultadosComponent,
    CadastraComponent,
    LoginUsuarioComponent,
    CadastroUsuarioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
=======
    LoginComponent,
    CadastraComponent,
    ExibirComponent,
    HomeComponent,
    ResultadosComponent,
    RegulamentoComponent,
    EquipesComponent,
    AutenticacaoComponent,
    BasqueteComponent,
    Futebolde7Component,
    FutsalComponent,
    QueimadaComponent,
    VoleibolComponent,
    FifaComponent,
    FortniteComponent,
    CsgoComponent,
    LolComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
>>>>>>> 2b6c7f6ff7d0fcca03f688973b146741c84badc0
  ],

  providers: [UsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
