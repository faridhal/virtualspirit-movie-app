import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import Header from './components/Header.tsx';
import MovieList from './pages/MovieList.tsx';

function App() {
  const queryClient = new QueryClient();

  return (
    <React.Fragment>
      <QueryClientProvider client={queryClient}>
        <Header />
        <MovieList />
      </QueryClientProvider>
    </React.Fragment>
  );
}

export default App;
