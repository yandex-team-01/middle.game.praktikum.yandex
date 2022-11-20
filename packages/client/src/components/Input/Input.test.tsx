import { expect, it, describe } from '@jest/globals';
import { render, screen, fireEvent } from '@testing-library/react';
import UserEvent from '@testing-library/user-event';
import { Input } from './Input';

describe('Input', () => {
    it('renders Input', () => {
        render(<Input />);
    })

    it('renders Input with label', () => {
        render(<Input label="new_input" />);

        expect(screen.getByText("new_input")).toBeDefined();
    })

    // it('checking value Input with fireEvent', () => {
    //     const { container } = render(<Input />);
    //     const input = container.firstChild as HTMLInputElement;

    //     fireEvent.change(input, { target: { value: "23" } });
    //     expect(input.value).toBe("23");
    // })

    // it('checking value Input with UserEvent', () => {
    //     const { container } = render(<Input />);
    //     const input = container.firstChild as HTMLInputElement;

    //     UserEvent.type(input, 'test input');
    //     expect(input.value).toMatch("test input");
    // })

    // it('checking focus Input', () => {
    //     const { container } = render(<Input />);
    //     const input = container.firstChild;

    //     expect(input).not.toHaveFocus();
    // })
});
