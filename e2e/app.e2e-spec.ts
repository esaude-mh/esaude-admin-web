import { EsaudeAdminWebPage } from './app.po';

describe('esaude-admin-web App', () => {
  let page: EsaudeAdminWebPage;

  beforeEach(() => {
    page = new EsaudeAdminWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
