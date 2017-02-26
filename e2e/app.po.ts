import { browser, element, by } from 'protractor';

export class Ang2Bootstrap4QuickstartPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
