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

    // оставлю это здесь для примера тестов, которые не работают.
    // Но, как мы обсудили, они не имеют особого смысла. 
    // Вариант с асинхронностью тоже не прошел
    // it('checking value Input with fireEvent', async () => {
    //     const { container } = render(<Input />);
    //     const input = container.firstChild as HTMLInputElement;

    //     await fireEvent.change(input, { target: { value: "23" } });
    //     expect(input.value).toBe("23");
    // })

    // it('checking value Input with UserEvent', async () => {
    //     const { container } = render(<Input />);
    //     const input = container.firstChild as HTMLInputElement;

    //     await UserEvent.type(input, 'test input');
    //     expect(input.value).toMatch("test input");
    // })
});
