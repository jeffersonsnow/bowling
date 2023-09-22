import {useSelector} from "react-redux";
import {Scores} from './Scores.jsx';

export function GameMode() {
    const players = useSelector(state => state.players);

    return (
        <>
            <h1 className="text-3xl font-bold mb-5">
                Let's get ready to Bowl!
            </h1>
            <Scores />
        </>
    )
}