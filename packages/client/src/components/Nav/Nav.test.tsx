import { expect, it, describe } from '@jest/globals';
import { render, screen, fireEvent } from '@testing-library/react';
import { Nav } from './Nav';

const NavContent = 'Test Nav';

describe('Nav', () => {
    it('renders Nav with text', () => {
        // render(<Nav to="/">Test Nav</Nav>);

        // expect(screen.getByText(NavContent)).toBeDefined();
    })

    // it('checking onClick Nav', () => {
    //     const handleClick = jest.fn();

    //     const { container } = render(<Nav onClick={handleClick}>{NavContent}</Nav>);
    //     const Nav = container.firstChild as HTMLElement;

    //     fireEvent.click(Nav);

    //     expect(handleClick).toHaveBeenCalledTimes(1)
    // })

    // it('checking disabled Nav', () => {
    //     const handleClick = jest.fn();

    //     const { container } = render(<Nav disabled={true} onClick={handleClick}>{NavContent}</Nav>);
    //     const Nav = container.firstChild as HTMLElement;

    //     fireEvent.click(Nav);

    //     expect(handleClick).toHaveBeenCalledTimes(0);

    //     //@ts-ignore
    //     expect(button['disabled']).toBe(true);
    // })
});
