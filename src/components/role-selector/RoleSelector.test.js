import { render, screen, fireEvent, waitFor } from '../../utils/test-utils';
import RoleSelector from './RoleSelector';
import { BrowserRouter } from 'react-router-dom';


it('should navigate to code verifier when drop off', async () => {
  render(<RoleSelector />)
  const dropOff = screen.getByText(/Drop off/);
  fireEvent.click(dropOff)

  await waitFor(() => {
    expect(window.location.pathname).toBe('/code');
  });
})

it('should navigate to code verifier when pickup', async () => {
  render(<RoleSelector />, { wrapper: BrowserRouter })

  const pickup = screen.getByText(/Pick up/);
  fireEvent.click(pickup)

  await waitFor(() => {
    expect(window.location.pathname).toBe('/code');
  });
})