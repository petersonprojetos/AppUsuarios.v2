import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {MatFormFieldModule} from '@angular/material/form-field';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { LeftSidebarComponent } from './components/left-sidebar/left-sidebar.component';
import { LogComponent } from './components/log/log.component';
import { MobileMenuComponent } from './components/mobile-menu/mobile-menu.component';
import { FuncaoComponent } from './components/pages/funcao/funcao.component';
import { HomeComponent } from './components/pages/home/home.component';
import { PapeisComponent } from './components/pages/papeis/papeis.component';
import { PerfilusuarioComponent } from './components/pages/perfilusuario/perfilusuario.component';
import { SetorComponent } from './components/pages/setor/setor.component';
import { SistemasComponent } from './components/pages/sistemas/sistemas.component';
import { NovotipousuarioComponent } from './components/pages/tipousuario/novotipousuario/novotipousuario.component';
import { TipousuarioComponent } from './components/pages/tipousuario/tipousuario.component';
import { NovousuarioComponent } from './components/pages/usuarios/novousuario/novousuario.component';
import { UsuariosComponent } from './components/pages/usuarios/usuarios.component';
import { ApiserviceService } from './services.service';

@NgModule({
  declarations: [
    AppComponent,
    LeftSidebarComponent,
    MobileMenuComponent,
    FooterComponent,
    HeaderComponent,
    UsuariosComponent,
    HomeComponent,
    TipousuarioComponent,
    SetorComponent,
    FuncaoComponent,
    PerfilusuarioComponent,
    SistemasComponent,
    PapeisComponent,
    LogComponent,
    NovousuarioComponent,
    NovotipousuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule
  ],
  providers: [ApiserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
