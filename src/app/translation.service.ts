import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private languageSubject = new BehaviorSubject<string>('en');
  public language$ = this.languageSubject.asObservable();

  private translations: any = {};

  constructor() {}

  loadTranslations(lang: string) {
    fetch(`/assets/i18n/${lang}.json`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Could not load translation file: ${response.statusText}`);
        }
        return response.json();
      })
      .then(translations => {
        this.translations = translations;
        this.languageSubject.next(lang);
      })
      .catch(error => {
        console.error('Could not load translation file:', error);
      });
  }

  translate(key: string): string {
    return this.translations[key] || key;
  }

  switchLanguage(lang: string) {
    this.loadTranslations(lang);
  }
}
