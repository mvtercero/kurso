import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomPipesModule } from '../custom-pipes/custom-pipes.module';
import { ExampleDirectiveComponent } from './example-directive/example-directive.component';

const ROUTES: Routes = [
  {path: 'directives', component: ExampleDirectiveComponent}
];

@NgModule({
  declarations: [ExampleDirectiveComponent],
  imports: [
    CommonModule,
    CustomPipesModule,
    RouterModule.forChild(ROUTES)
  ],
  exports: [ExampleDirectiveComponent]
})
export class DirectivesModule { }
