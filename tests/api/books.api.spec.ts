import { test, expect } from '@playwright/test';
import { BooksClient } from './clients/booksClient';
import { existingBookId, nonExistingBookId } from '../fixtures/books-test-data';
import { HttpStatusCodes } from '../constants/httpStatusCodes';

test.describe('Backend API – Books @api', () => {
  test('POST /api/books – create a book (positive) @api @positive @smoke', async ({ request }) => {
    const client = new BooksClient(request);

    const response = await client.createValidBook();
    expect(response.ok()).toBeTruthy();

    const body = await response.json();
    expect(body).toHaveProperty('id');
    expect(body.title).toBe('Test Book');
  });

  test('POST /api/books – missing fields (negative) @api @negative', async ({ request }) => {
    const client = new BooksClient(request);

    const response = await client.createBookWithMissingFields();
    expect(response.status()).toBe(HttpStatusCodes.BAD_REQUEST);
  });

   test('POST /api/books – with negative rating (negative) @api @negative', async ({ request }) => {
    const client = new BooksClient(request);

    const response = await client.createInValidBookWithNegative();
    expect(response.status()).toBe(HttpStatusCodes.BAD_REQUEST);
  });

  test('GET /api/books/:id – fetch existing book (positive) @api @positive', async ({ request }) => {
    const client = new BooksClient(request);

    const response = await client.getBookById(existingBookId);
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(HttpStatusCodes.OK);

    const book = await response.json();
    expect(book).toHaveProperty('title');
    expect(book).toHaveProperty('author');
  });

  test('GET /api/books/:id – non-existent book (negative) @api @negative', async ({ request }) => {
    const client = new BooksClient(request);

    const response = await client.getBookById(nonExistingBookId);
    expect(response.status()).toBe(HttpStatusCodes.NOT_FOUND);
  });
});