import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'], 
  template: `
    <div class="app">
      <button (click)="handleClick()">
        Change Name
      </button>
      <!-- One way data binding with listening for changes -->
      <input 
        type="text"
        [ngModel]="name"
        (ngModelChange)="handleChange($event)"
      >
      <!-- Two way data binding -->
      <input 
        type="text"
        [(ngModel)]="name"
      >
      <div>{{ name }}</div>
    </div>  
  `
})
export class AppComponent {
  name: string = 'Luka';

  handleClick() {
    this.name = "Todd"
  }

  handleChange(value: string) {
    this.name = value;
  }
  
}
