
import Sidebar from './sidebar'
import Breadcrumbs from './breadcrumbs'



const Dashboard = () => {
  return (
    <div className='flex bg-esidebar-100 '>
   <Sidebar/>
   <div className='flex flex-col w-full'>
  <div className='my-2.5 mx-5'><Breadcrumbs/></div>
  <div className='w-full h-0.5 bg-gray-300'></div>
  <h1 className='text-2xl font-bold mx-3 mt-2'> Dashboard</h1>
  <h2 className='text-lg text-gray-600 mx-3'> Overview of your transaction and balance of your account</h2>
  <div className='mx-3 my-2 px-2 py-1 w-fit pr-30 border-gray-300 border-2 rounded-md'>
    <h1 className='text-lg font-bold'>Account Balance</h1>
    <h2 className='text-2xl font-bold '>₹10,000</h2>
    <h3 className='text-sm text-blue-600 mt-5'>Manage Balance</h3>
    </div>
    </div>
    </div>
  )
}

export default Dashboard
