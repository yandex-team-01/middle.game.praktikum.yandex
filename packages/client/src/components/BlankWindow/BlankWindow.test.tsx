import { expect, it, describe } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import { BlankWindow } from './BlankWindow';

const BlankWindowContent = 'Test BlankWindow';

describe('BlankWindow', () => {
  it('renders BlankWindow with text', () => {
    render(<BlankWindow>Test BlankWindow</BlankWindow>);

    expect(screen.getByText(BlankWindowContent)).toBeDefined();
  });
});
