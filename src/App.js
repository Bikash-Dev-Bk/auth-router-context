import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Main from './layout/Main';
import PrivateRoutes from './routes/PrivateRoutes';
import Product from './components/Product';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/product',
          element: <PrivateRoutes><Product></Product></PrivateRoutes>
        },
        {
          path: '/register',
          element: <Register></Register>
        },
        {
          path: '/login',
          element:<Login></Login>
        }
      ]
      
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
