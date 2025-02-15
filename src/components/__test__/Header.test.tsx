import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Header from '../Header.tsx';

describe('Header Component', () => {
  beforeEach(() => {
    render(<Header />);
  });

  it('should have logo', () => {
    const element = screen.getByRole('img', { name: 'logo' });
    expect(element).toBeInTheDocument();
  });
});
