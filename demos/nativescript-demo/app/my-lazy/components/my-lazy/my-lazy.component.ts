import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lazy',
  template: `
    <StackLayout>
      <Label text="Loaded! Very neat." class="h2 text-center"></Label>
    </StackLayout>
  `,
  styles: [],
})
export class MyLazyComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
