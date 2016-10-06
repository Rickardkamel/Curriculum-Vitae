import { CurriculumVitaePage } from './app.po';

describe('curriculum-vitae App', function() {
  let page: CurriculumVitaePage;

  beforeEach(() => {
    page = new CurriculumVitaePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
