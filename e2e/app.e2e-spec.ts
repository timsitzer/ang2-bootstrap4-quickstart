import { Ang2Bootstrap4QuickstartPage } from './app.po';

describe('ang2-bootstrap4-quickstart App', () => {
  let page: Ang2Bootstrap4QuickstartPage;

  beforeEach(() => {
    page = new Ang2Bootstrap4QuickstartPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
