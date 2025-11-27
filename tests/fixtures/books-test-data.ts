export const validBookPayload = {
  title: 'Test Book',
  author: 'Test Author',
  genre: 'Fiction',
  publishedYear: 2025,
  description: 'A test book description',
  isbn: '1234567890',
  pages: 300,
  rating: 4.5,
};

export const invalidBookPayloadMissingFields = {
  title: 'Incomplete Book',
};

export const existingBookId = '1';
export const nonExistingBookId = 'nonexistent-id';

export const invalidBookNegativeRatingPayload = {
  title: 'Test Book',
  author: 'Test Author',
  genre: 'Fiction',
  publishedYear: 2025,
  description: 'A test book description',
  isbn: '1234567890',
  pages: 300,
  rating: -1,
};