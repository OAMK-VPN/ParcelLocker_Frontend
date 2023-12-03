import { render, screen } from '../../utils/test-utils';
import React from 'react';
import LocationsView from './LocationsView';

it('should render a list of locations', () => {
  render(<LocationsView locations={[
    {
      id: 1,
      name: "Automaatti Sokos Herkku Oulu",
      address: "Isokatu 25, 90104 OULU",
    }
  ]} />)

  expect(screen.getByTestId("location")).toBeInTheDocument()
})