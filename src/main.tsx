import { FC } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

import './index.css';
import './data/translations/i18n';
import App from './app';

const rootElement = document.getElementById('root');

if (rootElement) {
  const Root: FC = () => {
    return (
      <Router>
        <App />
      </Router>
    );
  };

  createRoot(rootElement).render(<Root />);
} else {
  console.error("Element with id 'root' not found. Make sure such an element exists in your HTML.");
}
