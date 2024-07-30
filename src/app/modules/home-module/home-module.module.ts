import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { UserListComponent } from '../home-module/pages/home/user-list/user-list.component';
import { UserFormComponent } from './pages/home/user-form/user-form.component';
import { HighlightDirectiveDirective } from '../../shared/directives/highlight-directive.directive';
import { FilterPipePipe } from '../../shared/pipes/filter-pipe.pipe';
import { CoreModuleModule } from 'src/app/core/core-module/core-module.module';


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
    CoreModuleModule
  ],
  exports: [HomeComponent]
})
export class HomeModuleModule { }
