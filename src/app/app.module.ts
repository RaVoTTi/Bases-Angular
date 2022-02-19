import { DBZModule } from './dbz/dbz.module';
import { ContadorModule } from './contador/contador.module';
import { NgModule } from '@angular/core';
import { HeroesModule } from './heroes/heroes.module';
import { BrowserModule } from '@angular/platform-browser';

// import { ContadorComponent } from './contador/contador/contador.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    // ContadorComponent,

  ],
  imports: [
    BrowserModule,
    HeroesModule,
    ContadorModule,
    DBZModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
