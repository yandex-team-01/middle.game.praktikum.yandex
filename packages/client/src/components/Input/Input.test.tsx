import { expect, it, describe } from '@jest/globals';
import { render, screen, fireEvent } from '@testing-library/react';
import { Input } from './Input';

describe('Input', () => {
    it('renders Input', () => {
        render(<Input />);

        screen.debug();
    })

    it('checking value Input', () => {
        const { container } = render(<Input />);
        const input = container.firstChild;

        expect(input).toBeNull();
        fireEvent.change(screen.getByRole("textbox"), {
            target: { value: "test" },
        });

        expect(screen.queryByText("test")).toBeInTheDocument();
    })

    it('checking focus Input', () => {
        const { container } = render(<Input />);
        const input = container.firstChild;

        expect(input).not.toHaveFocus();
    })
});
