import { render, screen, fireEvent, act } from '@testing-library/react';

import 'jasmine-ajax'
import { fetch as fetchPolyfill } from 'whatwg-fetch';
import CodeCell from './CodeCell';
import { waitFor } from '@testing-library/dom';
import { BrowserRouter, Router } from 'react-router-dom';

describe('CodeCell', () => {

  beforeEach(() => {
    render(<CodeCell />, { wrapper: BrowserRouter })
  })

  it('should navigate to main page if cancel', async () => {
    // const cancelbtn = screen.getByText('C');
    // fireEvent.click(cancelbtn);

    // await waitFor(() => {
    //   expect(window.location.pathname).toBe('/');
    // });
  })
});