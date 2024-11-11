import { RouterOutlet } from '@angular/router';
import { Component,} from '@angular/core';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ProgressBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'd3';

}
