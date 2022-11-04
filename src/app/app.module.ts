import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { CoreModule } from './core/core.module';




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
