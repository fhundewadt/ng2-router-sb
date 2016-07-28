import { Ng2InnoSbPage } from './app.po';

describe('ng2-inno-sb App', function() {
  let page: Ng2InnoSbPage;

  beforeEach(() => {
    page = new Ng2InnoSbPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
