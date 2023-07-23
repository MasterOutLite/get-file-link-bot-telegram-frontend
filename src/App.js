import {useEffect} from "react";

const app = window.Telegram.WebApp;

function App() {

    useEffect(() => {
        app.ready();
    }, [])
    return (
        <div className="App">
            <h1>
                Web app for telegram bot!
            </h1>
            {app.initDataUnsafe}
        </div>
    );
}

export default App;
