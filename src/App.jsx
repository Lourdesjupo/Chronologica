import './App.css'
import Page1 from './Page1'
import Page2 from './Page2'
import NotFoundPage from './NotFoundPage'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Page1/>,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/2",
    element: <Page2/>,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
