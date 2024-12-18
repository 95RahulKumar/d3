import { RouterOutlet } from '@angular/router';
import { Component, computed, OnInit, signal,} from '@angular/core';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { SignalPracticeComponent } from './signal-practice/signal-practice.component';
import { Store } from '@ngrx/store';
import { todoApiActions } from './store/actions';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ProgressBarComponent,SignalPracticeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
 constructor(private store: Store){}
  title = 'd3';
   firstName = signal('Morgan');

   ngOnInit(): void {
    this.store.dispatch(todoApiActions.loadingTodos());
  console.log('signal----',this.firstName());
  this.firstName.set('Jaime');
  console.log('signal----',this.firstName());
  this.firstName.update(name => name.toUpperCase()); 
  console.log('signal----',this.firstName());
  // angular track the signal when they are read and when they are updated 
  // computred is signal which produce value based on another signal 
  const firstNameLowerCase = computed(() => this.firstName().toLowerCase());
  // computed methode will return another signal 
  console.log('after used computed signal----',firstNameLowerCase());

  }
}
