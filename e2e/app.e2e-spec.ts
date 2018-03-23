import { RijaaPortfolioPage } from './app.po';

describe('rijaa-portfolio App', function() {
  let page: RijaaPortfolioPage;

  beforeEach(() => {
    page = new RijaaPortfolioPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
