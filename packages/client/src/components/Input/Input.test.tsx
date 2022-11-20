import { expect, it, describe } from '@jest/globals';
import { render, screen, fireEvent } from '@testing-library/react';
import UserEvent from '@testing-library/user-event';
import { Input } from './Input';

type TestElement = Document | Element | Window | Node

function hasInputValue(e: TestElement, inputValue: string) {
    return screen.getByDisplayValue(inputValue) === e
}

describe('Input', () => {
    it('renders Input', () => {
        render(<Input />);
    })

    it('renders Input with label', () => {
        render(<Input label="new_input" />);

        expect(screen.getByText("new_input")).toBeDefined();
    })

    // it('checking value Input', () => {
    //     const { container } = render(<Input />);
    //     const input = container.firstChild as HTMLInputElement;

    //     fireEvent.change(screen.getByRole('textbox'), {
    //         target: { value: "123" },
    //     });

    //     expect(hasInputValue(input, "123")).toBe(true)
    // })

    // it('checking value Input', () => {
    //     render(<Input />)

    //     // userEvent.type(screen.getByRole('textbox'), "test input");

    //     // screen.debug();
    //     // expect(screen.getByText("test input")).toBeDefined();

    //     const input = screen.getByRole('textbox') as HTMLInputElement;
    //     // UserEvent.type(input, 'test input');

    //     fireEvent.change(screen.getByRole('textbox'), {
    //         target: { value: "123" },
    //     });

    //     expect(input.value).toBe('123');
    // })

    // it('checking value Input', () => {
    //     const { container } = render(<Input />);
    //     const input = container.firstChild;

    //     //expect(input).toBeNull();
    //     fireEvent.change(screen.getByRole('textbox'), {
    //         target: { value: "test" },
    //     });

    //     screen.debug();
    //     expect(screen.queryByText("test")).toBeInTheDocument();
    // })

    // it('checking focus Input', () => {
    //     const { container } = render(<Input />);
    //     const input = container.firstChild;

    //     expect(input).not.toHaveFocus();
    // })
});
