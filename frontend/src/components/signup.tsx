import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import axios from "axios"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import toast from 'react-hot-toast';

export function Signup({
  className,
  ...props
}: React.ComponentProps<"div">) 
{
  const[lastName,SetLastName]=useState("")
  const[firstName,SetFirstName]=useState("")
  const[email,SetEmail]=useState("")
  const[password,SetPassword]=useState("")



  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center min-h-screen w-full p-6">
      <div className="w-full max-w-sm">
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle>Create your NeoBucks Account</CardTitle>
          
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
                <Label htmlFor="firstName">First Name</Label>
                <Input
                  id="firstName"
                  type="text"
                  onChange={e=>{
                    SetFirstName(e.target.value)
                  }}
                  placeholder="John"
                  required
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                  id="lastName"
                  type="text"
                  onChange={e=>{
                    SetLastName(e.target.value)
                  }}
                  placeholder="Doe"
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
                 
                  e.preventDefault(); 
                  try {
                    const response= await axios.post("http://localhost:3000/api/v1/user/signup",{
                    email,
                    firstName,
                    lastName,
                    password
                  })
                  if(response.data && response.data.token) {

                    localStorage.setItem("token",response.data.token)
                    toast.success("Signed Up!")
                  }
                  
                  navigate("/dashboard");
                  } catch (error) {
                    console.error("Error during signup:", error);
                    
                  }
                 
                }}
                className="w-full">
                  Sign Up
                </Button>
                
              </div>
            </div>
            <div className="mt-4 text-center text-sm">
              Already have an account?{" "}
              <Link to="/signin" className="underline underline-offset-4">
                Sign in
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
