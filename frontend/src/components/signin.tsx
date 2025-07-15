import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Link } from "react-router-dom"
import axios from "axios"
import { useState } from "react"

export function Signin({
  className,
  ...props
}: React.ComponentProps<"div">) {
 
  const[email, SetEmail] = useState("")
  const[password, SetPassword] = useState("")
  return (
    <div className="flex items-center justify-center min-h-screen w-full p-6">
      <div className="w-full max-w-sm">
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle>Login to your NeoBucks account</CardTitle>
          
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-3">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  onChange={e=>{
                    SetEmail(e.target.value)
                  }}
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="grid gap-3">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                 
                </div>
                <Input id="password" onChange={e=>{SetPassword(e.target.value)}} type="password" required />
              </div>
              <div className="flex flex-col gap-3">
                <Button type="submit"
                onClick={async(e)=>{
                  e.preventDefault()
                  try {
                    const response= await axios.post("http://localhost:3000/api/v1/user/signin",{
                    email,
                    password
                  })
                  localStorage.setItem("token",response.data.token)
                  
                  } catch (error) {
                    console.error("Error during sign-in:", error);
                    
                  }
                 
                }} 
                className="w-full">
                  Login
                </Button>
                
              </div>
            </div>
            <div className="mt-4 text-center text-sm">
              Don&apos;t have an account?{" "}
              <Link to="/signup" className="underline underline-offset-4">
                Sign up
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
    </div>
    </div>
  )
}
