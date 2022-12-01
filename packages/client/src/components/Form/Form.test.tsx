import { ReactNode } from 'react';
import { expect, it, describe } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import { Button } from '../Button';
import { Form } from './Form';

const FormContent = 'Test Form';

describe('Form', () => {
  it('renders Form with text', () => {
    const button = <Button>buttonsBlock</Button>;

    render(<Form buttonsBlock={button}>Test Form</Form>);

    expect(screen.getByText(FormContent)).toBeDefined();
  });
});
