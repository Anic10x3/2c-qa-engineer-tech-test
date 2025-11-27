import { Page, Locator, expect } from '@playwright/test';
import { assertValidationError } from '../utils/utility';
import { ValidationMessages } from '../constants/bookConstants'; // Import the constant

export class AddBookPage {
  readonly page: Page;

  readonly titleInput: Locator;
  readonly authorInput: Locator;
  readonly genreSelect: Locator;
  readonly publishedYearInput: Locator;
  readonly descriptionTextarea: Locator;
  readonly isbnInput: Locator;
  readonly pagesInput: Locator;
  readonly ratingInput: Locator;
  readonly submitButton: Locator;
  readonly successMessage: Locator;
  readonly validationMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.titleInput = page.locator('input[name="title"]');
    this.authorInput = page.locator('input[name="author"]');
    this.genreSelect = page.locator('#genre');
    this.publishedYearInput = page.locator('input[name="publishedYear"]');
    this.descriptionTextarea = page.locator('textarea[name="description"]');
    this.isbnInput = page.locator('input[name="isbn"]');
    this.pagesInput = page.locator('input[name="pages"]');
    this.ratingInput = page.locator('input[name="rating"]');
    this.submitButton = page.locator('button[type="submit"]');
    this.successMessage = page.getByText('Book added successfully');
    this.validationMessage = page.getByText('Please fill out this field');
  }

  async goto() {
    await this.page.goto('/add-book');
  }

  async fillValidForm(overrides?: Partial<Record<string, string>>) {
    const data = {
      title: 'Test Book',
      author: 'Test Author',
      genre: 'Fiction',
      publishedYear: '2025',
      description: 'A test book description',
      isbn: '1234567890',
      pages: '300',
      rating: '4.5',
      ...overrides,
    };

    await this.titleInput.fill(data.title);
    await this.authorInput.fill(data.author);
    await this.genreSelect.selectOption({ value: data.genre });
    await this.publishedYearInput.fill(data.publishedYear);
    await this.descriptionTextarea.fill(data.description);
    await this.isbnInput.fill(data.isbn);
    await this.pagesInput.fill(data.pages);
    await this.ratingInput.fill(data.rating);
  }

  async submit() {
    await this.submitButton.click();
  }

  async assertSuccessVisible() {
    await expect(this.successMessage).toBeVisible();
  }

  async assertTitleValidationErrorVisible() {
        await assertValidationError(this.titleInput, ValidationMessages.REQUIRED_FIELD);
  }

   async assertAuthorValidationErrorVisible() {
     await assertValidationError(this.authorInput, ValidationMessages.REQUIRED_FIELD);
  }
}