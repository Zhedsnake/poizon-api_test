import React, {useState} from "react";
import AppRouter from "./components/AppRouter";
import { TestContext } from "./context";


//Redux
import {Provider} from 'react-redux';
import store from "./store";

// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';



const App: React.FC = () => {
    const [done, setDone] = useState<boolean>(false);

    return (
        <Provider store={store}>
            <TestContext.Provider value ={{
                done,
                setDone
            }}>
                <AppRouter/>
            </TestContext.Provider>
        </Provider>
    )
}

export default App
