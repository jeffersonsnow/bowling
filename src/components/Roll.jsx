import React, { useState, useEffect } from "react";
import {useDispatch} from "react-redux";
import {nextPlayer} from "../features/turn/turnSlice.js";
import {useSelector} from "react-redux";
import {updatePlayerScore} from "../features/player/playerSlice.js";


export function Roll() {
    const dispatch = useDispatch();
    const currentFrame = useSelector(state => state.turn.currentFrame);
    const players = useSelector(state => state.player.players);
    const currentPlayerIndex = useSelector(state => state.turn.currentPlayerIndex);
    const playerId  = players[currentPlayerIndex]?.id;

    const computedRolls = currentFrame === 9 ? 3 : 2;

    const rollAttempts = [1,2,3];
    const [currentRollIndex, setCurrentRollIndex] = useState(0);

    const [isRolling, setIsRolling] = useState(false);
    const [remainingPins, setRemainingPins] = useState([1,2,3,4,5,6,7,8,9,10]);
    const [remainingRolls, setRemainingRolls] = useState(computedRolls);

    function handleRollClick() {
        setIsRolling(true);

        setTimeout(() => {
            setIsRolling(false);
        }, 2000);

        calculateHit();
    }

    useEffect(() => {
        if (remainingRolls === 0 || remainingPins === 0) {
            setTimeout(() => {
                dispatch(nextPlayer(players));
                // Set the remainingRolls back to the initial value (computedRolls)
                setRemainingRolls(computedRolls);

                // Reset the number of remaining pins to 10
                setRemainingPins([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

                setCurrentRollIndex(0);
            }, 2000);
        }
    }, [remainingRolls, dispatch]);

    function calculateHit() {
        const randomNumber = Math.floor(Math.random() * remainingPins.length + 1);
        const pinsToRemove = remainingPins.slice(0, randomNumber);

        //handle strikes!

        setRemainingPins((prevPins) =>
            prevPins.filter((pin) => !pinsToRemove.includes(pin))
        );

        setRemainingRolls(prevRolls => prevRolls - 1);
        setCurrentRollIndex(prevIndex => prevIndex + 1);
        dispatch(updatePlayerScore({ playerId, frameIndex: currentFrame, rollAttempt: rollAttempts[currentRollIndex], score: pinsToRemove.length }));
    }

    const ballClass = isRolling ? "bowling-ball roll-animation" : "bowling-ball";

    return (
        <>
            <h1 className="text-3xl font-bold mt-5 bg-white-500">Roll!</h1>
            <div className="roll-row">
                <div className={ballClass} onClick={handleRollClick}>
                    <div className="small-circle"></div>
                    <div className="small-circle"></div>
                    <div className="small-circle"></div>
                </div>
                {remainingPins.map(pin => (
                    <div key={pin} className="bowling-pin">
                        <div className="top"></div>
                        <div className="body"></div>
                    </div>
                ))}
            </div>
        </>
    );
}
