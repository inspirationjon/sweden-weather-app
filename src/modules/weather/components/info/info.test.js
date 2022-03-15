import { render, screen, cleanup } from '@testing-library/react';
import { Info } from './info.component';

test('should render list of row', () => {
  render(<Info />);
  const tableRow = screen.getByText('Cel');
  expect(tableRow).toBeInTheDocument();
});
