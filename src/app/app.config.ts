import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection, isDevMode } from '@angular/core';
import { provideRouter, RouterModule } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { provideState, provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { appFeatureKey, todoReducer } from './store/reducers';
import { TodoEffects } from './store/effects';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),
    importProvidersFrom(RouterModule.forRoot(routes)),
    provideHttpClient(withInterceptorsFromDi()), provideStore(),provideState({name:appFeatureKey,reducer:todoReducer}), provideEffects([TodoEffects]), provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })]
};
