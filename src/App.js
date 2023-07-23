import {useEffect} from "react";
import {useTelegram} from "./hooks/useTelegram";
import {Button, Row} from "react-bootstrap";


function App() {

    const {ready, user, onToggleButton} = useTelegram();

    useEffect(() => {
        ready();
    }, [])
    return (
        <div className="App">
            <h1>
                Web app for telegram bot!
            </h1>
            <div>
                {user?.username}
            </div>

            <Button onClick={onToggleButton}>Toggle</Button>
        </div>
    );
}

export default App;
