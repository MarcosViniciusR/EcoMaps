import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EletronicoComponent } from './components/eletronico/eletronico.component';
import { LampadaComponent } from './components/lampada/lampada.component';
import { PneuComponent } from './components/pneu/pneu.component';


@NgModule({
  declarations: [
    AppComponent,
    EletronicoComponent,
    LampadaComponent,
    PneuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
