import { ApplicationConfig, LOCALE_ID } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';

import vi from '@angular/common/locales/vi';
import { registerLocaleData } from '@angular/common';

registerLocaleData(vi);

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    { provide: LOCALE_ID, useValue: 'vi-VN' },
  ],
};
