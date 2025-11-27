import { Locator, expect } from '@playwright/test';

/**
 * Asserts that a validation error message is visible for a given input field.
 * @param inputField - The Locator for the input field.
 * @param expectedMessage - The expected validation message.
 */
export async function assertValidationError(inputField: Locator, expectedMessage: string) {
  const validationMessage = await inputField.evaluate(
    (el: HTMLInputElement) => el.validationMessage
  );
  expect(validationMessage).toBe(expectedMessage);
}