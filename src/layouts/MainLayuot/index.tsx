import { Outlet } from 'react-router-dom';
import TheHeader from '@/components/Common/TheHeader';
import TheFooter from '@/components/Common/TheFooter';
function MainLayout() {
  return (
    <div className=' flex flex-col justify-between min-h-screen'>
    <TheHeader/>
      <Outlet/>
   <TheFooter/>
    </div>
  )
}

export default MainLayout