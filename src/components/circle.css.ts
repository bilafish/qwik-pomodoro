import { style } from 'styled-vanilla-extract/qwik';
import { createVar } from '@vanilla-extract/css';

export const dynamicDashOffset = createVar();

export const Circle = style({
    width: '100%',
    height: '100%',
    fill: 'none',
    stroke: '#f87070',
    strokeWidth: '10',
    strokeLinecap: 'round',
    strokeDasharray: '943',
    strokeDashoffset: dynamicDashOffset,
    transform: 'translate(30px, 35px)'
});