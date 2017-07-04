import { PROJECTPage } from './app.po';

describe('project App', () => {
  let page: PROJECTPage;

  beforeEach(() => {
    page = new PROJECTPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
