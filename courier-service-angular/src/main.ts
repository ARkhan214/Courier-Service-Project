import { bootstrapApplication } from '@angular/platform-browser';
// import { appConfig } from './app/app.config';
import { App } from './app/app';
import { provideRouter, Routes } from '@angular/router';
import { ConsumerProfile } from './app/consumer/consumer-profile/consumer-profile';
import { ApplicationConfig } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';

const routes: Routes = [
  { path: '', component: ConsumerProfile }
]

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient()
  ]
};


bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
