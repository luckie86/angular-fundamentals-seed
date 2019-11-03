import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'], 
  template: `
    <div class="app">
  
      <input 
        type="text"
        [value]="name"
        (input)="handleChange($event.target.value)"
      >
      <!-- This is shorthand for -->

      <div *ngIf="name.length > 2">
          Searching for... {{ name }}
      </div>
      
      <!-- for this sugar syntax -->
      
      <template [ngIf]="name.length > 2">
        <div>
          Searching for... {{ name }}
        </div>
      </template>

    </div>  
  `
})
export class AppComponent {
  name: string = '';

  handleChange(value: string) {
    this.name = value;
  }
  
}
