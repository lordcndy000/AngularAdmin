import { MyAdminAppPage } from './app.po';

describe('my-admin-app App', () => {
  let page: MyAdminAppPage;

  beforeEach(() => {
    page = new MyAdminAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
