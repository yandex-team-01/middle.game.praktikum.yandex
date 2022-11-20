import { expect, it, describe, jest } from '@jest/globals';
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './Button';

const buttonContent = 'Test button';

describe('Button', () => {
    it('renders Button with text', () => {
        render(<Button>Test button</Button>);

        expect(screen.getByText(buttonContent)).toBeDefined();
    })

    it('checking onClick', () => {
        const handleClick = jest.fn();

        const { container } = render(<Button onClick={handleClick}>{buttonContent}</Button>);
        const button = container.firstChild as Element;

        fireEvent.click(button);

        expect(handleClick).toHaveBeenCalledTimes(1)
    })

});
