import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModuleTsModule } from './app-routing.module.ts/app-routing.module.ts.module'
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './navbar/login/login.component';
import { PerfilComponent } from './perfil/perfil.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { EducacionComponent } from './educacion/educacion.component';
import { SkillsComponent } from './skills/skills.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IntroComponent } from './intro/intro.component';
import { NavbardashboardComponent } from './navbardashboard/navbardashboard.component';
import { CerrarsesionComponent } from './navbardashboard/cerrarsesion/cerrarsesion.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BannerComponent } from './banner/banner.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    PerfilComponent,
    ExperienciaComponent,
    EducacionComponent,
    SkillsComponent,
    ProyectosComponent,
    DashboardComponent,
    IntroComponent,
    NavbardashboardComponent,
    CerrarsesionComponent,
    SidebarComponent,
    BannerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModuleTsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
