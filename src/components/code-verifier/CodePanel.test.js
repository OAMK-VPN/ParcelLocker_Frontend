import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import CodePanel from './CodePanel';
import nock from 'nock';
import { BrowserRouter, useLocation } from 'react-router-dom';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: jest.fn(), // Mock the useLocation function
}));

const mockUseLocation = (pathname, state) => {
  useLocation.mockImplementation(() => ({
    pathname,
    state,
  }));
};

it('ok click and user see the cabinet is opened', async () => {
  nock("http://localhost:3000")
    .defaultReplyHeaders({
      "access-control-allow-origin": "*",
    })
    .get(/.*\/api\/parcels\/public/)
    .reply(200, {
      lockerId: 1,
      isOpen: true
    });

  const initialState = { role: 'pick-up' }
  mockUseLocation('/code', initialState);
  jest.spyOn(Storage.prototype, 'getItem');

  render(
    <BrowserRouter>
      <CodePanel />
    </BrowserRouter>
  )

  const submitBtn = screen.getByText('OK');
  fireEvent.click(submitBtn);
  expect(localStorage.getItem).toHaveBeenCalled();

  await waitFor(() => {
    expect(screen.queryByRole('h2')).not.toBeInTheDocument()
  })
})