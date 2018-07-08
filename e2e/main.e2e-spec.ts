import { MainPage } from './main.po';

describe('media-demands-front App', () => {
  let page: MainPage;

  beforeEach(() => {
    page = new MainPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
  });
});
