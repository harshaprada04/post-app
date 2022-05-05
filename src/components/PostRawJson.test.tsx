import "@testing-library/jest-dom/extend-expect";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import PostRawJson from "./PostRawJson";


const AddRouting = () => {
  return (
    <BrowserRouter>
      <PostRawJson />
    </BrowserRouter>
  );
};

it("Page has a previous page button or not", () => {
  render(<AddRouting />);
  expect(screen.getByText(/back/i)).toBeTruthy();
});

it("Back button has click event or not", () => {
  render(<AddRouting />);
  let button = screen.getByText(/back/i);
  let click = fireEvent.click(button);
  expect(click).toBe(true);
});

