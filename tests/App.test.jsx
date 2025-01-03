import { describe, it, expect } from 'vitest';
import { getByText, getByRole, render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter, RouterProvider, createMemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import App from "../src/App";
import Shop from "../src/components/Shop";

const renderWithRouter = (ui) => {
  return render(<BrowserRouter>{ui}</BrowserRouter>);
};


describe('App component', () => {
  it("render Sidebar", () => {
    renderWithRouter(<App />);
    
    expect(
      screen.getByText(
        /Home/i
      )
    ).toBeInTheDocument();
  });

  it("click view btn", async () => {
    const user = userEvent.setup();

    const { container } = renderWithRouter(<App />);

    const button = screen.getByText('Shop').closest('a')

    await user.click(button);

    expect(document.querySelector("head")).toBeInTheDocument();
  });
});