import { UnclehubPage } from './app.po';

describe('unclehub App', function() {
  let page: UnclehubPage;

  beforeEach(() => {
    page = new UnclehubPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
