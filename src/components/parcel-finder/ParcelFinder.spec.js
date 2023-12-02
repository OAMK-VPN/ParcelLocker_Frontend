// import { render, screen, fireEvent, act } from '@testing-library/react';
// import userEvent from '@testing-library/user-event'
// import 'jasmine-ajax'
// import { fetch as fetchPolyfill } from 'whatwg-fetch';
// import ParcelFinder from './ParcelFinder';
// import { waitFor } from '@testing-library/dom';

// describe('ParcelFinder', () => {
//   let originalFetch;

//   beforeEach(() => {
//     originalFetch = (window).fetch;
//     (window).fetch = fetchPolyfill;

//     jasmine.Ajax.install();

//     render(<ParcelFinder />)
//   })

//   afterEach(() => {
//     jasmine.Ajax.uninstall();
//     (window).fetch = originalFetch;
//   })

//   it('render correctly', () => {
//     expect(screen.getByRole('welcomeText')).toBeTruthy();
//     expect(screen.getByTestId('searchBox')).toBeTruthy();
//   })

//   it('submit disable if input not ok', async () => {
//     let searchInput = screen.getByLabelText('zip')
//     let findBtn = screen.getByRole('button')
//     fireEvent.change(searchInput, { target: { value: '1234' } })
//     await waitFor(() => expect(findBtn.disabled).toBe(true))

//     fireEvent.change(searchInput, { target: { value: '12345' } })
//     await waitFor(() => expect(findBtn.disabled).toBe(false))
//   })

//   // Happy case
//   xit('show result when user input in search', async () => {

//     let searchInput = screen.getByLabelText('zip')
//     let findBtn = screen.getByRole('button')

//     fireEvent.change(searchInput, { target: { value: '12345' } })
//     fireEvent.click(findBtn)

//     const request = jasmine.Ajax.requests.mostRecent();
//     expect(request.url).toMatch(/.*\/api\/lockers\/zipcode/);
//     expect(request.method).toBe("GET");

//     const response = {
//       status: 200,
//       response: JSON.stringify([
//         {
//           "id": 1,
//           "name": "Postnord Lähiboksi Prisma Limingantulli",
//           "totalCabinets": 20,
//           "city": "OULU",
//           "address": "Nuottasaarentie 1",
//           "zipcode": "12345"
//         },
//       ])
//     }

//     act(() => {
//       request.respondWith(response);
//     })

//     await waitFor(() => {
//       expect(screen.queryByTestId('locationView')).toBeTruthy()
//     });
//   })

//   // Sad case
//   it('given server response with no locations found, then location view is not shown', async () => {
//     let searchInput = screen.getByLabelText('zip')
//     let findBtn = screen.getByRole('button')

//     fireEvent.change(searchInput, { target: { value: '12345' } })
//     fireEvent.click(findBtn)

//     const request = jasmine.Ajax.requests.mostRecent();
//     expect(request.url).toMatch(/.*\/api\/lockers\/zipcode/);
//     expect(request.method).toBe("GET");

//     const response = {
//       status: 200,
//       response: JSON.stringify([])
//     }

//     act(() => {
//       request.respondWith(response);
//     })

//     await waitFor(() => {
//       expect(screen.queryByTestId('locationView')).toBeFalsy()
//     });
//   })
// });