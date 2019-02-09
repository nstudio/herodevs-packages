import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  moduleId: module.id,
})
export class HomeComponent {
  title = 'nativescript-demo';
  load = false;
  moduleName = '~/my-lazy/my-lazy.module#MyLazyModule';

  constructor() {}
}
