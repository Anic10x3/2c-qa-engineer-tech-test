import { test, expect } from '@playwright/test';
import { BookDetailPage } from '../page-objects/BookDetailPage';
import { existingBookId, nonExistingBookId } from '../fixtures/books-test-data';

test.describe('Book Detail Page @ui', () => {
  test('Load valid book (positive) @ui @positive', async ({ page }) => {
    const bookDetailPage = new BookDetailPage(page);

    await bookDetailPage.goto(existingBookId);
    await expect(bookDetailPage.titleHeader).toBeVisible();
    await bookDetailPage.assertBackToLibraryVisible();
    await bookDetailPage.assertAddAnotherBookVisible();
  });

  test('Handle non-existent book (negative) @ui @negative', async ({ page }) => {
    const bookDetailPage = new BookDetailPage(page);

    await bookDetailPage.goto(nonExistingBookId);
    await bookDetailPage.assertNotFoundVisible();
  });
});