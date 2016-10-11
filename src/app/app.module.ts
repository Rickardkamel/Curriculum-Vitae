// --- AngularImports --- \\
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


// --- ProjectImports --- \\
// SourceModules
import { AppComponent } from './app.component';
import { ShellComponent } from './shell.component'

// ComponentModules
import { HomeModule } from './home/home.module';
import { HeaderModule } from './header/header.module';
import { AboutModule } from './about/about.module';

// Routing
import { AppRoutingModule } from './routes/app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    ShellComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HomeModule,
    HeaderModule,
    AboutModule,
    HttpModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
