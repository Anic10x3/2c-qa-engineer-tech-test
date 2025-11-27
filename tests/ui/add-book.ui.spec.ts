import { test } from '@playwright/test';
import { AddBookPage } from '../page-objects/AddBookPage';

test.describe('Add Book Page @ui', () => {
  test('Submit valid form (positive) @ui @positive @smoke', async ({ page }) => {
    const addBookPage = new AddBookPage(page);

    await addBookPage.goto();
    await addBookPage.fillValidForm();
    await addBookPage.submit();
    await addBookPage.assertSuccessVisible();
  });

  test('Submit invalid form (missing required fields) @ui @negative', async ({ page }) => {
    const addBookPage = new AddBookPage(page);

    await addBookPage.goto();
    await addBookPage.titleInput.fill('');
    await addBookPage.submit();
    await addBookPage.assertTitleValidationErrorVisible();
    await addBookPage.titleInput.fill('Test Book');
    await addBookPage.submit();
    await addBookPage.assertAuthorValidationErrorVisible();

  });
});