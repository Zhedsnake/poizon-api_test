import React from "react";
import AppRouter from "./components/AppRouter";


//Redux
import {Provider} from 'react-redux';
import store from "./store";

// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';



const App: React.FC = () => {

    return (
        <Provider store={store}>
            <AppRouter/>
        </Provider>
    )
}

export default App
