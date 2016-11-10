// --- AngularImports --- \\
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';


// --- ProjectImports --- \\
// ServiceImports
import { GlobalVariableService } from './shared/global-variable.service';

// SourceModules
import { AppComponent } from './app.component';
import { ShellComponent } from './shell.component';

// ComponentModules
import { HomeModule } from './home/home.module';
import { HeaderModule } from './header/header.module';
import { AboutModule } from './about/about.module';
import { ResumeModule } from './resume/resume.module';
import { SkillModule } from './skill/skill.module';
import { ContactModule } from './contact/contact.module';
import { TechnologiesModule } from './technologies/technologies.module';
import { ReferencesModule } from './references/references.module';

// Routing
import { AppRoutingModule } from './routes/app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    ShellComponent,
  ],
  imports: [
    HttpModule,
    BrowserModule,

    // ComponentModules
    ContactModule,
    TechnologiesModule,
    ReferencesModule,
    HomeModule,
    HeaderModule,
    AboutModule,
    ResumeModule,
    SkillModule,

    // Routing
    AppRoutingModule,
  ],
  providers: [GlobalVariableService],
  bootstrap: [AppComponent]
})

export class AppModule { }
