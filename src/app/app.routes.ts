import { Routes } from '@angular/router';
import { SignalPracticeComponent } from './signal-practice/signal-practice.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';

export const routes: Routes = [
    {
        path:'signal',
        component:SignalPracticeComponent
    },
    {
        path:'progress',
        component:ProgressBarComponent
    },
    {
        path:'',
        redirectTo:'/signal',
        pathMatch:'full'
    }
];
