import { Page, Locator, expect } from '@playwright/test';

export class BookDetailPage {
  readonly page: Page;
  readonly titleHeader: Locator;
  readonly backToLibraryLink: Locator;
  readonly addAnotherBookLink: Locator;
  readonly notFoundMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.titleHeader = page.getByRole('heading', { level: 1 });
    this.backToLibraryLink = page.getByRole('link', {
      name: 'Back to Library',
      exact: true,
    });
    this.addAnotherBookLink = page.getByRole('link', { name: 'Add Another Book' });
    this.notFoundMessage = page.getByText('Book not found');
  }

  async goto(bookId: string) {
    await this.page.goto(`/book/${bookId}`);
  }

  async assertBackToLibraryVisible() {
    await expect(this.backToLibraryLink).toBeVisible();
  }

  async assertAddAnotherBookVisible() {
    await expect(this.addAnotherBookLink).toBeVisible();
  }

  async assertNotFoundVisible() {
    await expect(this.notFoundMessage).toBeVisible();
  }
}