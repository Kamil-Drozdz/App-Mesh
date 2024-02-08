import { FC } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './index.css';
import './data/translations/i18n';
import App from './app';

const rootElement = document.getElementById('root');
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 10,
    },
  },
});

if (rootElement) {
  const Root: FC = () => (
    <QueryClientProvider client={queryClient}>
      <Router>
        <App />
      </Router>
    </QueryClientProvider>
  );

  createRoot(rootElement).render(<Root />);
} else {
  console.error("Element with id 'root' not found. Make sure such an element exists in your HTML.");
}
