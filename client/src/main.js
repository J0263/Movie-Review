import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
createRoot(document.getElementById('root')).render(<StrictMode>
    <App />
  </StrictMode>);
import Login from './pages/LoginPage.tsx';
//./pages/LoginPage.tsx
import { createBrowserRouter } from 'react-router-dom';
// import Login from './pages/LoginPage.tsx'
const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <Login />
            },
        ]
    }
]);
// const rootElement = document.getElementById('root');
// if (rootElement) {
//   ReactDOM.createRoot(rootElement).render(<RouterProvider router={router} />);
// }
