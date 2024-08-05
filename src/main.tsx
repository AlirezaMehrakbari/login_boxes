import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {Provider} from 'react-redux'
import store from "./redux/store.ts";
import {PersistGate} from 'redux-persist/integration/react'
import {persistStore} from 'redux-persist'

const persistor = persistStore(store)

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <ToastContainer autoClose={2000}/>
                <App/>
            </PersistGate>
        </Provider>
    </React.StrictMode>,
)
