import { useState, useEffect } from 'react'
import './App.css'
import { NewPlayerForm } from "./components/NewPlayerForm.jsx";

function App() {
    const [players, setPlayers] = useState(()=> {
        const localValue = localStorage.getItem("PLAYERS");
        if(localValue === null) return [];
        return JSON.parse(localValue);
    });

    useEffect(()=> {
        localStorage.setItem("ITEMS", JSON.stringify(players));
    }, [players])

    function addPlayer(name) {
        setPlayers( currentTodos => {
            return [
                ...currentTodos,
                {
                    id: crypto.randomUUID(),
                    name,
                    frameScores: []
                },
            ]
        })
    }

  return (
    <>
        <h1 className="text-3xl font-bold mb-5">
            Welcome, Bowlers!
        </h1>
        <NewPlayerForm onSubmit={addPlayer} />
    </>
  )
}

export default App
