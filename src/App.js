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
           <div>
               {app.initDataUnsafe?.user?.username}
           </div>
            <div>
                {
                    app.initData?.user?.name
                }
            </div>

        </div>
    );
}

export default App;
