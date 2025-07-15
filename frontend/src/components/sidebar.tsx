import Home from "@/icons/Home"
import SbItems from "./ui/sbItems"
import Account from "@/icons/Account"
import Transaction from "@/icons/Transaction"
import Money from "@/icons/Money"
import Help from "@/icons/Help"

const Sidebar = () => {
  return (
    <div className="bg-esidebar-200 min-h-screen w-fit border-r-2 border-gray-300  ">
      <img src="/logo.png" alt="" className="h-8 mt-1 mb-2 ml-1.5 " />
      <div className="w-full h-0.5 bg-gray-300 mb-2"></div>
      <SbItems icon={<Home />} text="Dashboard" />
      <SbItems icon={<Money />} text="Send Funds" />
      
      {/* Add more sidebar items as needed */}
      <SbItems icon={<Transaction />} text="Transactions" />
      <SbItems icon={<Account />} text="Profile" />
      <SbItems icon={<Help />} text="Help" />

    </div>
  )
}

export default Sidebar
