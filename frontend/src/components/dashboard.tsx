
import Sidebar from './sidebar'
import Breadcrumbs from './breadcrumbs'
import { Button } from './ui/button'



const Dashboard = () => {
  return (
    <div className='flex bg-white '>
   <Sidebar/>
   <div className='flex flex-col w-full'>
  <div className='my-2.5 mx-5'><Breadcrumbs/></div>
  <div className='w-full h-0.5 bg-gray-300'></div>
  <h1 className='text-2xl font-bold mx-3 mt-2'> Dashboard</h1>
  <h2 className='text-lg text-gray-600 mx-3'> Overview of your transaction and balance of your account</h2>
  <div className='flex'>

  <div className='mx-3 my-2 px-2 py-1 w-fit pr-30 border-gray-300 border-2 rounded-md'>
    <h1 className='text-lg font-bold'>Account Balance</h1>
    <h2 className='text-2xl font-bold '>₹10,000</h2>
    <h3 className='text-sm text-blue-600 mt-5'>Manage Balance</h3>
    </div>
    <div className=' my-2 px-2 py-1 w-fit pr-20 border-gray-300 border-2 rounded-md'>
    <h1 className='text-lg font-bold'>Quick Pay</h1>
    <h1 className='text-md text-zinc-500'>Send Money directly to your Homies</h1>
    <Button className='mt-2.5'>Make Payment</Button>
    </div>
    
  </div>
  <div className='ml-3 w-full border-2 border-gray-300 rounded-md '>
    <h1 className='text-lg font-bold px-3 pt-2 pb-1'>Recent Transactions</h1>
    <div className='w-full h-0.5 bg-gray-300'></div>
    <div className='p-3'>
      <h2 className='text-md font-bold'>Transaction 1</h2>
      <h3 className='text-sm text-gray-600'>Date: 01/01/2023</h3>
      <h3 className='text-sm text-gray-600'>Amount: ₹1,000</h3>
    </div>
  </div>
    </div>
    </div>
  )
}

export default Dashboard
