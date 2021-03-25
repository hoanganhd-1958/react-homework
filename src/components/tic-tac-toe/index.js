import React, { useState, useEffect } from "react"

export default function TicTacToe() {

    const [count, setCount] = useState(0)

    useEffect(() => {
        document.title = `You click ${count} times`
    });

    return (
        <div>
            You click {count} times
            <button onClick={() => setCount(count + 1)}>Hit me</button>
        </div>
    );
}