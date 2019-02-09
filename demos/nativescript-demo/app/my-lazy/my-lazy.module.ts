import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MyLazyComponent } from './components/my-lazy/my-lazy.component';

const routes: Routes = [
  {
    path: '',
    component: MyLazyComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [MyLazyComponent],
  bootstrap: [MyLazyComponent],
})
export class MyLazyModule {}
