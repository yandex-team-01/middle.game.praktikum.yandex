import { expect, it, describe } from '@jest/globals';
import { AiFillCodeSandboxCircle } from 'react-icons/ai';
import { dateFormatting } from './dateFormatting';

describe('dateFormatting', () => {
    it('format date', () => {
        const newFormatDate = dateFormatting(new Date('2022-11-20T18:51:53.972Z'));

        expect(newFormatDate).toBe('20/11/2022 21:51');
    })
})