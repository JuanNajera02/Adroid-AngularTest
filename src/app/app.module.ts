import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './core/footer/footer.component';
import { HeaderComponent } from './core/header/header.component';
import { HomeComponent } from './modules/pages/home/home.component';
import { UserListComponent } from './modules/pages/home/user-list/user-list.component';
import { UserFormComponent } from './modules/pages/home/user-form/user-form.component';
import { HighlightDirectiveDirective } from './shared/directives/highlight-directive.directive';
import { FilterPipePipe } from './shared/pipes/filter-pipe.pipe';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    UserListComponent,
    UserFormComponent,
    HighlightDirectiveDirective,
    FilterPipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
