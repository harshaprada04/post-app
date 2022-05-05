import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Homepage from "./Homepage";
import { act } from "react-dom/test-utils";
import React from "react";
import { ContextProvider } from "../context/context";

let AddRouting = () => {
  return (
    <BrowserRouter>
      <ContextProvider>
        <Homepage />
      </ContextProvider>
    </BrowserRouter>
  );
};

it("Page has div or not", () => {
  render(<AddRouting />);
  let div = screen.getByTestId("main_div");
  expect(div).toBeInTheDocument();
});

jest.setTimeout(20000);

it("Post is loading or not", async () => {
  render(<AddRouting />);

  await act(async () => {
    const useRefSpy = jest
      .spyOn(React, "useRef")
      .mockReturnValueOnce({ current: { pageNumber: 0 } });
    const intersectionObserverMock = () => ({
      observe: () => null,
      disconnect: () => null,
    });
    window.IntersectionObserver = jest
      .fn()
      .mockImplementation(intersectionObserverMock);
    await new Promise((r) => setTimeout(r, 10000));
       });
  let div = screen.getByTestId("post-0");
  expect(div).toBeInTheDocument();
});
