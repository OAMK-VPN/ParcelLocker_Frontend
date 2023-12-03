import { useState } from 'react';
import { render, screen, fireEvent, act, waitFor } from '../../utils/test-utils';
import CodeCell from './CodeCell';

describe('CodeCell', () => {
  it('should navigate to main page if cancel', async () => {
    const handleClickMock = jest.fn();
    render(<CodeCell code='1' setCode={handleClickMock} />)

    const closeBtn = screen.getByText('Close');
    fireEvent.click(closeBtn);

    await waitFor(() => {
      expect(window.location.pathname).toBe('/');
    });
  })

  it('should click only once', () => {
    const handleClickMock = jest.fn();
    render(<CodeCell code='1' setCode={handleClickMock} />)

    const numberBtn = screen.getByText('1');
    fireEvent.click(numberBtn);

    expect(handleClickMock).toHaveBeenCalledTimes(1);
  })
});
