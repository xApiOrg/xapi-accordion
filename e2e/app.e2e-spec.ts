import { AccordionPage } from './app.po';

describe('accordion App', () => {
  let page: AccordionPage;

  beforeEach(() => {
    page = new AccordionPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
