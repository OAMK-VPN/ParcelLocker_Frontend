// import { render, screen, fireEvent, waitFor } from '@testing-library/react';
// import ParcelFinder from './ParcelFinder';
// import LocationsView from '../pickup-location/LocationsView';

// // beforeEach(() => {
// //   jest.spyOn(global, 'fetch').mockResolvedValue({
// //     json: jest.fn().mockResolvedValue(mockResponse)
// //   })
// // });

// // afterEach(() => {
// //   jest.restoreAllMocks();
// // });

// test('render correctly', () => {
//   render(<ParcelFinder />)

//   expect(screen.getByRole('welcomeText')).toBeInTheDocument();
//   expect(screen.getByTestId('searchBox')).toBeInTheDocument();
// })


// // Happy case
// test('show result when user input in search', async () => {
//   render(<ParcelFinder />)


//   let searchInput = screen.getByLabelText('zip')
//   let findBtn = screen.getByRole('button')

//   fireEvent.change(searchInput, { value: '12345' })
//   fireEvent.click(findBtn)

//   await waitFor(() => {
//     expect(screen.getByTestId('location')).toBeInTheDocument()
//   });
// })

// // Sad case
// test('given server response with no locations found, then location view is not shown', async () => {
//   render(<ParcelFinder />)

//   let searchInput = screen.getByLabelText('zip')
//   let findBtn = screen.getByRole('button')

//   fireEvent.change(searchInput, { value: '67890' })
//   fireEvent.click(findBtn)

//   await waitFor(() => {
//     expect(screen.queryByTestId('location')).not.toBeInTheDocument()
//   });
// })