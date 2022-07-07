import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { ParentComponent } from './components/parent/parent.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { IfRenderComponent } from './components/if-render/if-render.component';
import { EventsComponent } from './components/events/events.component';
import { EmitindoEventosComponent } from './components/emitindo-eventos/emitindo-eventos.component';
import { ChangeNumberComponent } from './components/change-number/change-number.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    ParentComponent,
    DirectivesComponent,
    IfRenderComponent,
    EventsComponent,
    EmitindoEventosComponent,
    ChangeNumberComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
