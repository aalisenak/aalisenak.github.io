import React from "react";
import {App} from "./App";
import * as ReactDOMClient from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";

const root = ReactDOMClient.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>
);