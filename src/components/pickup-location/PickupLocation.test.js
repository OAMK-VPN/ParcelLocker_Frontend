import React from "react";
import { fireEvent, screen, render, waitFor } from '../../utils/test-utils'
import PickupLocation from "./PickupLocation";

it("should save to local storage when button click and navigate", async () => {
  render(<PickupLocation />)
  jest.spyOn(Storage.prototype, 'setItem');
  const btn = screen.getByText('Choose');

  fireEvent.click(btn);
  expect(localStorage.setItem).toHaveBeenCalled();

  await waitFor(() => {
    expect(window.location.pathname).toBe('/role');
  });
})