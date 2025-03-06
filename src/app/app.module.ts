import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavComponent } from './shared/nav/nav.component';
import { SolicitudesComponent } from './widgets/solicitudes/solicitudes.component';
import { SorteosComponent } from './widgets/sorteos/sorteos.component';
import { ReemplazosComponent } from './widgets/reemplazos/reemplazos.component';
import { DisponibilidadComponent } from './widgets/disponibilidad/disponibilidad.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    NavComponent,
    SolicitudesComponent,
    SorteosComponent,
    ReemplazosComponent,
    DisponibilidadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
