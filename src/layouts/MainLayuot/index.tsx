import { Outlet } from 'react-router-dom';
import TheHeader from '@/components/Common/TheHeader';
import TheFooter from '@/components/Common/TheFooter';function MainLayout() {
  return (
    <div className='  min-h-screen'>

    <TheHeader/>
      <Outlet/>
   <TheFooter/>
    </div>
  )
}

export default MainLayout