import { RifPage } from './app.po';

describe('rif App', () => {
  let page: RifPage;

  beforeEach(() => {
    page = new RifPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
