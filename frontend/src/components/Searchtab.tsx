import { Search } from "lucide-react";
import { Input } from "./ui/input";
import { useState } from "react";
import { Button } from "./ui/button";

const SearchTab=()=>{
    const [users, setUsers] = useState([{
        firstName: "Harkirat",
        lastName: "Singh",
        _id: 1
    }]);
    return(
        <div className="w-full h-screen flex items-center justify-center bg-esidebar-400">
            <div className="bg-white   rounded-md max-w-lg md:w-2/3 lg:w-1/2 xl:w-1/3 shadow-lg h-1/2 ">
                <h1 className="text-2xl font-bold py-2 px-4">Send Money </h1>
                <div className="w-full h-0.5 bg-gray-300 mb-3"></div>
                {/* <Input id="search" className="w-96 m-4" placeholder= " Search for a user or transaction" /> */}
                <div className="relative w-full max-w-md px-2 sm:px-4 md:px-6 lg:px-0 mx-auto">
      <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
      <Input
        id="search"
        placeholder="Search any user for transaction"
        className="pl-12 text-sm sm:text-base"
      />
    </div>
     <div className="mt-4 px-4">
            {users.map(user => <User user={user} />)}
        </div>

               
            </div>

        </div>
    )
}
function User({user}) {
    return <div className="flex justify-between items-center">
        <div className="flex items-center">
            <div className="rounded-full h-8 w-8 bg-slate-200 flex justify-center mt-1 mr-2">
                <div className="flex flex-col justify-center h-full text-lg">
                    {user.firstName[0]}
                </div>
            </div>
            <div className="flex flex-col justify-center h-ful">
                <div className="text-md ">
                    {user.firstName} {user.lastName}
                </div>
            </div>
        </div>

        <div className="flex flex-col justify-center h-ful">
            <Button  variant="default" className="text-sm bg-blue-600  hover:bg-blue-500 cursor-pointer"> Send Money</Button>
        </div>
    </div>
    }

export default SearchTab;