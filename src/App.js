import {useEffect} from "react";
import {useTelegram} from "./hooks/useTelegram";
import {Button} from "react-bootstrap";


function App() {

    const { tg, user, onToggleButton } = useTelegram();

    useEffect(() => {
        tg.ready();
    }, )
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
