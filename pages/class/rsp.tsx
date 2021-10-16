import React, {Component} from 'react';

const rspCoords = {
    rock: '0',
    scissor: '-142px',
    paper: '-284px',
} as const;

const scores = {
    scissor: 1,
    rock: 0,
    paper: -1,
} as const;

type ImgCoords = typeof rspCoords[keyof typeof rspCoords];
// todo check typeof and keyof

const computerChoice = (imgCoords: ImgCoords) => {
    return (Object.keys(rspCoords) as ['rock', 'scissor', 'paper']).find((k) => {
        return rspCoords[k] === imgCoords;
    })!;
};
