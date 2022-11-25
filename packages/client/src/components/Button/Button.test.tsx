import { expect, it, describe, jest } from '@jest/globals';
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './Button';

const buttonContent = 'Test button';

describe('Button', () => {
    it('renders Button with text', () => {
        render(<Button>Test button</Button>);

        expect(screen.getByText(buttonContent)).toBeDefined();
    })

    it('checking onClick button', () => {
        const handleClick = jest.fn();

        const { container } = render(<Button onClick={handleClick}>{buttonContent}</Button>);
        const button = container.firstChild as HTMLElement;

        fireEvent.click(button);

        expect(handleClick).toHaveBeenCalledTimes(1)
    })

    it('checking disabled button', () => {
        const handleClick = jest.fn();

        const { container } = render(<Button disabled={true} onClick={handleClick}>{buttonContent}</Button>);
        const button = container.firstChild as HTMLElement;

        fireEvent.click(button);

        expect(handleClick).toHaveBeenCalledTimes(0);

        //@ts-ignore
        expect(button['disabled']).toBe(true);
    })
});
