import React from 'react';
import { useSelector } from 'react-redux';
import Question from './Question';
import Result from './Result';

const Game = () => {
    const questionCount = useSelector(state => state.questionCount);

    return (
        <div style={{ textAlign: "center" }}>
            {questionCount === 12 ? (
                <Result />
            ) : (
                <>
                    <p>진행 상황: {((questionCount / 12) * 100).toFixed(2)}%</p>
                    <Question />
                </>
            )}
        </div>
    );
};

export default Game;
