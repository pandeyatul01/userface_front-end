import React from 'react';
import { useBoard } from './useBoard';

const Board = () => {
    const [display, score, onKeyDown] = useBoard();

    return (
        <div className="t-board" tabIndex={0} onKeyDown={onKeyDown}>
            <div>
                <span className="t-score-label">Score:</span>
                <span className="t-score">{score.toLocaleString()}</span>
            </div>
            {display.map((row, rowIndex) => (
                <div className="t-row" key={rowIndex}>
                    {row.map((cell, cellIndex) => (
                        <div className={`t-cell t-cell-${cell}`} key={cellIndex}></div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default Board;
