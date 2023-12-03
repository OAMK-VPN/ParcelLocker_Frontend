import { render, screen, fireEvent, act, waitFor } from '@testing-library/react';

import ParcelFinder from './ParcelFinder';
import nock from 'nock';

describe('ParcelFinder', () => {

  afterAll(() => {
    nock.cleanAll();
    nock.restore();
  });

  it('render correctly', () => {
    render(<ParcelFinder />)

    expect(screen.getByRole('welcomeText')).toBeTruthy();
    expect(screen.getByTestId('searchBox')).toBeTruthy();
  })

  it('submit disable if input not ok', async () => {
    render(<ParcelFinder />)

    let searchInput = screen.getByLabelText('zip')
    let findBtn = screen.getByRole('button')
    fireEvent.change(searchInput, { target: { value: '1234' } })
    await waitFor(() => expect(findBtn.disabled).toBe(true))

    fireEvent.change(searchInput, { target: { value: '12345' } })
    await waitFor(() => expect(findBtn.disabled).toBe(false))
  })

  // Happy case
  it('show result when user input in search', async () => {
    nock("http://localhost:3000")
      .defaultReplyHeaders({
        "access-control-allow-origin": "*",
      })
      .get(/.*\/api\/lockers\/zipcode/)
      .reply(200, [
        {
          "id": 1,
          "name": "Postnord Lähiboksi Prisma Limingantulli",
          "totalCabinets": 20,
          "city": "OULU",
          "address": "Nuottasaarentie 1",
          "zipcode": "12345"
        },
      ]);

    
    render(<ParcelFinder />)

    let searchInput = screen.getByLabelText('zip')
    let findBtn = screen.getByRole('button')

    fireEvent.change(searchInput, { target: { value: '12345' } })
    fireEvent.click(findBtn)
  })

  // Sad case
  it('given server response with no locations found, then location view is not shown', async () => {
    nock("http://localhost:3000")
      .defaultReplyHeaders({
        "access-control-allow-origin": "*",
      })
      .get(/.*\/api\/lockers\/zipcode/)
      .reply(200, []);

    render(<ParcelFinder />)

    let searchInput = screen.getByLabelText('zip')
    let findBtn = screen.getByRole('button')

    fireEvent.change(searchInput, { target: { value: '12345' } })
    fireEvent.click(findBtn)

    await waitFor(() => {
      expect(screen.queryByTestId('locationView')).toBeFalsy()
    });
  })
});