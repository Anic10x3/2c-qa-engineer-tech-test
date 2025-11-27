import type { APIRequestContext, APIResponse } from '@playwright/test';
import { API_BASE_URL } from '../../shared/routes';
import {
  validBookPayload,
  invalidBookPayloadMissingFields,
  invalidBookNegativeRatingPayload
} from '../../fixtures/books-test-data';

export class BooksClient {
  constructor(private request: APIRequestContext) {}

  createValidBook(): Promise<APIResponse> {
    return this.request.post(API_BASE_URL, { data: validBookPayload });
  }

  createBookWithMissingFields(): Promise<APIResponse> {
    return this.request.post(API_BASE_URL, { data: invalidBookPayloadMissingFields });
  }

  getBookById(id: string): Promise<APIResponse> {
    return this.request.get(`${API_BASE_URL}/${id}`);
  }

  createInValidBookWithNegative(): Promise<APIResponse> {
    return this.request.post(API_BASE_URL, { data: invalidBookNegativeRatingPayload });
  }
}