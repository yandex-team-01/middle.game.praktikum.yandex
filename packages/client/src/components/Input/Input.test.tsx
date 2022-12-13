import { expect, it, describe } from '@jest/globals';
import { render, screen, fireEvent } from '@testing-library/react';
import { Input } from './Input';

describe('Input', () => {
  it('renders Input', () => {
    render(<Input />);
  });

  it('renders Input with label', () => {
    render(<Input label="new_input" />);

    expect(screen.getByText('new_input')).toBeDefined();
  });
});
