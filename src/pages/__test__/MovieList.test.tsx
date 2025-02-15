import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import MovieList from '../MovieList.tsx';

const queryClient = new QueryClient();

describe('Page Movie List', () => {
  beforeEach(() => {
    render(
      <QueryClientProvider client={queryClient}>
        <MovieList />
      </QueryClientProvider>
    );
  });

  it('should have search input', () => {
    const element = screen.getByRole('searchbox', { name: 'search' });
    expect(element).toBeInTheDocument();
  });
});
