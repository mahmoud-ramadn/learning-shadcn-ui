import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from '@/layouts/MainLayuot';
import { lazy, Suspense } from 'react';
const Home =lazy(()=>import('@/pages/Home'))
const router=createBrowserRouter([{
    path:'/',
    element:<MainLayout/>,
    children:[
     {
        index: true,

        element:
        <Suspense fallback={<h1>loading ....</h1>}>
            <Home />
        </Suspense>
    },
    ]
}
])
function AppRouter() {
  return (
      <RouterProvider router={router} />)
}

export default AppRouter