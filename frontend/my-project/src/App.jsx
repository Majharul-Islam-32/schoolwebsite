import { RouterProvider } from 'react-router-dom';
import { router } from './router/router';
import './App.css';

import { LanguageProvider } from './context/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <RouterProvider router={router} />
    </LanguageProvider>
  );
}

export default App;
