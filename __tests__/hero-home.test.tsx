
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import HeroHome from '@/components/hero-home';

test('navigates to contact section when Contact Us button is clicked', () => {
  render(<HeroHome />);

  // Find the Contact Us button
  const contactButton = screen.getByText('Contact Us');

  // Simulate a click on the Contact Us button
  fireEvent.click(contactButton);

  // Check if the URL hash has changed to #contact
  expect(window.location.hash).toBe('#contact');
});