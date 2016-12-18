import { JobCompanionPage } from './app.po';

describe('job-companion App', function() {
  let page: JobCompanionPage;

  beforeEach(() => {
    page = new JobCompanionPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
