import { useState } from "react";
import { Input } from "./ui/input";
import { useSearchParams } from "react-router-dom";
import { Button } from "./ui/button";
import axios from "axios";

export const Send = () => {
    const[searchParams] = useSearchParams();
    const id=searchParams.get("id");
    const name=searchParams.get("name");

    const [amount, setAmount] = useState("");
    return <div className="flex justify-center h-screen bg-esidebar-400">
        <div className="h-full flex flex-col justify-center">
            <div
                className="border h-min text-card-foreground max-w-lg p-4 space-y-8 w-fit bg-white shadow-lg rounded-lg"
            >
                <div className="flex flex-col px-20 ">
                <h2 className="text-3xl font-bold text-center">Enter Amount</h2>
                </div>
                <div className="px-5">
                <div className="flex items-center gap-2 ">
                    <div className="w-8 h-8 rounded-full bg-esidebar-400 flex items-center justify-center">
                    <span className="text-lg text-white">{name[0].toUpperCase()}</span>
                    </div>
                    <h3 className="text-xl font-semibold tracking-normal">{name}</h3>
                </div>
                <div className="space-y-4">
                    <div className="space-y-2">
                    <h1
                        className="text-sm pt-4 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        
                    >
                        Amount (in Rs)
                    </h1>
                    {/* <input
                        type="number"
                        min="0"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                        id="amount"
                        placeholder="Enter amount"
                    /> */}
                    <Input
                        type="number"
                        min="0"
                        onChange={(e) => setAmount(e.target.value)}
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                        id="amount"
                        placeholder="Enter amount"
                    />
                    </div>
                    <Button
                    onClick={()=>{
                        axios.post("http://localhost:3000/api/v1/account/transfer", {
                            to:id,
                            amount
                        })
                    }}
                    className="justify-center rounded-md text-sm font-medium ring-offset-background transition-colors h-10 px-4 py-2 w-full bg-blue-500 hover:bg-blue-400 cursor-pointer text-white">
                        Make Payment
                    </Button>
                </div>
                </div>
        </div>
      </div>
    </div>
}

export default Send
