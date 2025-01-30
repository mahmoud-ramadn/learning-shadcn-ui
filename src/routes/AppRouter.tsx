import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from '@/layouts/MainLayuot';
import { lazy, Suspense } from 'react';
const Home =lazy(()=>import('@/pages/Home'));
const Shope=lazy(()=>import("@/pages/Shope"));
const SinglProduct=lazy(()=>import('@/pages/SingleProduct'))
const Articels =lazy(()=>import('@/pages/Articels'))
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
    },{
      path:'/singleproduct',
      element:<SinglProduct/>
    },
    {
      path:'/articles',
      element:<Articels/>
    }
    ]
}
])
function AppRouter() {
  return (
      <RouterProvider router={router} />)
}

export default AppRouter