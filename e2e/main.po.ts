import {browser, by, element} from 'protractor';

export class MainPage {

  private title = by.id('title');
  private blabla = by.id('blabla');

  navigateTo() {
    return browser.get('/list');
  }

  getTitle() {
    return element(title).getText();
  }

}
