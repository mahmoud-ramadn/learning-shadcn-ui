import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from '@/layouts/MainLayuot';
import { lazy, Suspense } from 'react';
const Home =lazy(()=>import('@/pages/Home'))
const Shope=lazy(()=>import("@/pages/Shope"))
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
    {
      path:"/shope",
      element:
      <Suspense fallback ={<h1>loading....</h1>}>
        <Shope/>
      </Suspense>
    }
    ]
}
])
function AppRouter() {
  return (
      <RouterProvider router={router} />)
}

export default AppRouter