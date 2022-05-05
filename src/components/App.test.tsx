import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "../App";
import { ContextProvider } from "../context/context";
import { MemoryRouter } from "react-router";

let AddRouting = (()=>{
    return(
        <BrowserRouter>
        <ContextProvider>
        <App/>
        </ContextProvider>
        </BrowserRouter>
    )
})

test ("renders",()=>{
    render(<AddRouting/>)
})
