import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { UserListComponent } from '../home-module/pages/home/user-list/user-list.component';
import { UserFormComponent } from './pages/home/user-form/user-form.component';
import { HighlightDirectiveDirective } from '../../shared/directives/highlight-directive.directive';
import { FilterPipePipe } from '../../shared/pipes/filter-pipe.pipe';
import { CoreModuleModule } from 'src/app/core/core-module/core-module.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    HomeComponent,
    UserListComponent,
    UserFormComponent,
    HighlightDirectiveDirective,
    FilterPipePipe
  ],
  imports: [
    CommonModule,
    CoreModuleModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    BrowserAnimationsModule
  ],
  exports: [HomeComponent]
})
export class HomeModuleModule { }
