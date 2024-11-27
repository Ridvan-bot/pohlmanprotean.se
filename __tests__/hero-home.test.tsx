
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import HeroHome from '@/components/hero-home';

test('clicks the Contact Us button in HeroHome', () => {
  render(<HeroHome />);

  // Click the Contact Us button
  fireEvent.click(screen.getByText('Contact Us'));

  // Check if the URL hash changed to #contact
  expect(window.location.hash).toBe('#contact');
});