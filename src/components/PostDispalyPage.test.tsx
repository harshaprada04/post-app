import "@testing-library/jest-dom/extend-expect";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import PostDisplayPage from "./PostDisplayPage";

const baseProps = {
  id: 1,
  title: "Elon Musk",
  author: "Harsha",
  create: "04/04/1998",
  url: "www.google.com",
};
let AddRouting = () => {
  return (
    <BrowserRouter>
      <PostDisplayPage {...baseProps} />
    </BrowserRouter>
  );
};

it("testing the autor name", () => {
  render(<AddRouting />);
  expect(screen.getByTestId("author").innerHTML).toBe("Harsha");
});

it("testing the title", () => {
  render(<AddRouting />);
  expect(screen.getByTestId("title").innerHTML).toBe("Elon Musk");
});

it("title has click event or not", async () => {
  render(<AddRouting />);
    let title = screen.getByTestId("title");
    console.log(title)
    let click = fireEvent.click(title);
      expect(click).toBe(true);
});

it("testing the date", () => {
  render(<AddRouting />);
  expect(screen.getByTestId("date").innerHTML).toBe("4/4/1998");
});

it("testing the url", () => {
  render(<AddRouting />);
  expect(screen.getByTestId("url").innerHTML).toBe("www.google.com");
});

it("title has url event or not", async () => {
  render(<AddRouting />);
    let title = screen.getByTestId("url");
    let click = fireEvent.click(title);
      expect(click).toBe(true);
});
