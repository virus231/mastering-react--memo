import React, {useState, memo, useMemo, useCallback} from "react";
import './App.css';

function App() {
    const [appRenderIndex, setAppRenderIndex] = useState(0);
    const [color, setColor] = useState("red");

    console.log('App rendered', `${appRenderIndex}`);

    const params = useMemo(() => ({color}), [color]);
    const onClick = useCallback(() => {}, []);

    return (
        <div className="App">
            <button onClick={() => setAppRenderIndex(appRenderIndex + 1)}>
                Re-render App
            </button>
            <button onClick={() => setColor(color === "red" ? "green" : "red")}>
                Change Color
            </button>
            <div>
                <MemoizedChild params={params} onClick={onClick}/>
            </div>
        </div>
    );
}


function Child({params, onClick}) {
    console.log('Child rendered', `${params.color}`);

    return (
        <div style={{margin: 2, width: 75, height: 75, backgroundColor: params.color}}></div>
    )
}

const MemoizedChild = memo(Child);

export default App;
