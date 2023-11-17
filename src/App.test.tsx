import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';



describe('App', () => {
    test('renders without crashing', () => {
      render(<App/>);
    });
  
    test('changes language when image is clicked', () => {
      const { getByAltText } = render(<App/>);
      const frenchFlag = getByAltText('french');
      const englishFlag = getByAltText('english');
  
      // Simulate a click on the French flag
      fireEvent.click(frenchFlag);
      expect(localStorage.getItem('lang')).toBe('fr');
  
      // Simulate a click on the English flag
      fireEvent.click(englishFlag);
      expect(localStorage.getItem('lang')).toBe('en');
    });
  });