import Home from "@/icons/Home"
import SbItems from "./ui/sbItems"
import Account from "@/icons/Account"
import Transaction from "@/icons/Transaction"
import Money from "@/icons/Money"
import Help from "@/icons/Help"
import { useNavigate } from "react-router-dom"

const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-esidebar-200 min-h-screen w-fit border-r-2 border-gray-300  ">
      <img src="/logo.png" alt="" className="h-8 mt-1 mb-2 ml-1.5 " />
      <div className="w-full h-0.5 bg-gray-300 mb-2"></div>
      <SbItems onClick={()=>{
        navigate("/dashboard")
      }} icon={<Home />} text="Dashboard" />
      <SbItems onClick={
        ()=>{
          navigate("/search")
        }
      } icon={<Money />} text="Send Funds" />
      
      {/* Add more sidebar items as needed */}
      <SbItems onClick={
        ()=>{
          navigate("/transactions")
        }
      } icon={<Transaction />} text="Transactions" />
      <SbItems onClick={()=>{}} icon={<Account />} text="Profile" />
      <SbItems onClick={()=>{}} icon={<Help />} text="Help" />

    </div>
  )
}

export default Sidebar
