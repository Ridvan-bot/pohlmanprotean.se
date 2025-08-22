/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import Contact from '@/components/contact';
// Mock fetch API
global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve({}),
  })
) as jest.Mock;
test('renders the contact form', () => {
  render(<Contact />);
  expect(screen.getByPlaceholderText('Förnamn')).toBeInTheDocument();
});
test('mock fetch works', async () => {
  const response = await fetch('/api/sendMessage');
  expect(response.ok).toBe(true);
});
test('fills out the form and submits it', async () => {
  render(<Contact />);
  // Fill out the form
  fireEvent.change(screen.getByPlaceholderText('Förnamn'), { target: { value: 'John' } });
  fireEvent.change(screen.getByPlaceholderText('Efternamn'), { target: { value: 'Doe' } });
  fireEvent.change(screen.getByPlaceholderText('Företag'), { target: { value: 'Acme Corp' } });
  fireEvent.change(screen.getByPlaceholderText('Befattning'), { target: { value: 'Developer' } });
  fireEvent.change(screen.getByPlaceholderText(/E.?post/i), { target: { value: 'john.doe@example.com' } });
  fireEvent.change(screen.getByPlaceholderText('Telefonnummer'), { target: { value: '1234567890' } });
  fireEvent.change(screen.getByPlaceholderText('Meddelande'), { target: { value: 'Hello, this is a test message.' } });
  // Submit the form
  fireEvent.click(screen.getByText('Skicka meddelande'));
  // Wait for the success message to appear
  await waitFor(() => {
    expect(screen.getByText('Tack för ditt meddelande! Vi återkommer inom kort.')).toBeInTheDocument();
  });
  // Ensure fetch was called with the correct data
  expect(global.fetch).toHaveBeenCalledWith('/api/sendMessage', expect.objectContaining({
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      firstName: 'John',
      lastName: 'Doe',
      company: 'Acme Corp',
      jobTitle: 'Developer',
      email: 'john.doe@example.com',
      phoneNumber: '1234567890',
      message: 'Hello, this is a test message.',
    }),
  }));
});