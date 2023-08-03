jest.mock('../img/book_no_img1.jpeg', () => 'mocked_book_no_img1.jpeg');

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import { MemoryRouter } from "react-router-dom";
import { BookProvider } from '../../context/BookContext';
import { FavoriteProvider } from '../../context/FavoriteContext';
import BookDetails from '../layout/Book';

const WrappedBookDetails = () => (
  <BookProvider>
    <FavoriteProvider>
      <BookDetails />
    </FavoriteProvider>
  </BookProvider>
);

describe("BookDetails", () => {
  it("should increase quantity when the increment button is clicked", () => {
    render(<WrappedBookDetails />, { wrapper: MemoryRouter });
    screen.findByTestId('count-input').then((countInput) => {
      // Initially, count should be empty or 1
      expect(countInput.value).toBe('');

      screen.findByLabelText('Increment Count').then((incrementButton) => {
        fireEvent.click(incrementButton);
        expect(countInput.value).toBe('2');
      });
    });
  });

  it("should decrease quantity when the decrement button is clicked", () => {
    render(<WrappedBookDetails />, { wrapper: MemoryRouter });

    screen.findByTestId('count-input').then((countInput) => {
      expect(countInput.value).toBe('');

      screen.findByLabelText('Decrement Count').then((decrementButton) => {
        fireEvent.click(decrementButton);
        expect(countInput.value).toBe('1');
      });
    });
  });
});

describe("BookDetails", () => {
  it("should update total price correctly", () => {
    render(<WrappedBookDetails />, { wrapper: MemoryRouter });

    // Use findByTestId and interact with the elements once they are available
    screen.findByTestId('book-price').then((countElem) => {
      screen.findByTestId('count-input').then((countInput) => {
        screen.findByTestId('total-price').then((totalInput) => {
          // Set countElem value to 10.00
          // Note: You should parse the value as a float or number if necessary
          countElem.textContent = '10.00';

          // Simulate a change event on countInput with value 2
          fireEvent.change(countInput, { target: { value: '2' } });

          // Expect totalInput to be 20.00
          expect(totalInput.textContent).toBe('20.00');
        });
      });
    });
  });
});

