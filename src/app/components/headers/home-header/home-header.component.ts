import { Component } from '@angular/core';
import { NavComponent } from '../../navbar/nav/nav.component';

@Component({
  selector: 'app-home-header',
  standalone: true,
  imports: [NavComponent],
  templateUrl: './home-header.component.html',
  styleUrl: './home-header.component.css'
})
export class HomeHeaderComponent {
  title: string = 'todo-sda v01';
  title02: string = 'druha hláška';
}
