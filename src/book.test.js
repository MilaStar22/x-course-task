import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
import BookDetails from './components/layout/Book';

describe('Book component', () => {
  // test('should increase count when clicking the increment button', () => {
  //   render(<BookDetails />);
  //   const incrementButton = screen.getByTestId('increment-button');
  //   const countInput = screen.getByTestId('count-input');

  //   fireEvent.click(incrementButton);
  //   expect(countInput.value).toBe('2');

  //   fireEvent.click(incrementButton);
  //   expect(countInput.value).toBe('3');
  // });

  // test('should decrease count when clicking the decrement button', () => {
  //   render(<BookDetails />);
  //   const decrementButton = screen.getByTestId('decrement-button');
  //   const countInput = screen.getByTestId('count-input');

  //   fireEvent.click(decrementButton);
  //   expect(countInput.value).toBe('2');

  //   fireEvent.click(decrementButton);
  //   expect(countInput.value).toBe('1');
  // });

  test('should update total price when changing the count', () => {
    render(<BookDetails />);
    const countInput = screen.getByTestId('count-input');
    const totalPrice = screen.getByTestId('total-price');

    fireEvent.change(countInput, { target: { value: '5' } });
    expect(totalPrice.textContent).toBe('Total price: $10.00');

    fireEvent.change(countInput, { target: { value: '10' } });
    expect(totalPrice.textContent).toBe('Total price: $20.00');
  });
});