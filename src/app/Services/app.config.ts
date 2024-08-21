import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { routes } from '../app.routes';

const firebaseConfig = {
  apiKey: "AIzaSyDNLR9qxn6mmHTPtfDv2Vgjq4GxLVSvO-s",
  authDomain: "e-commerce-a12e7.firebaseapp.com",
  projectId: "e-commerce-a12e7",
  storageBucket: "e-commerce-a12e7.appspot.com",
  messagingSenderId: "664626545508",
  appId: "1:664626545508:web:8251595f9005afff6cb071",
  measurementId: "G-422LPXVJFQ"
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), 
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideAuth(() => getAuth()),
  ]

};
