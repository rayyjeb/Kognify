"use client"

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

const authFormSchema = (type:FormType)=>{
  return z.object({
    name: type ==='sign-up'? z.string().min(3)
:z.string().optional(), email:z.string().email(),
password: z.string().min(3),  })
}
import { Button } from "@/components/ui/button"
import {
  Form,
} from "@/components/ui/form"
import Image from "next/image"
import Link from "next/link"
import { toast } from "sonner"
import FormField from "./FormField"
const AuthForm = ({type}:{type:FormType}) => {
  const formSchema = authFormSchema(type)
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          name: "",
          email: "",
          password: "",
        },
      })
     
      // 2. Define a submit handler.
      function onSubmit(values: z.infer<typeof formSchema>) {
        try {
          if(type==='sign-up'){
            console.log('Sign Up', values)
          }else{
            console.log('SIGN IN', values);
          }
        } catch (error) {
          console.log("error: ", error);
          toast.error(`There was an error`)
          
        }
      }
      const isSignIn = type === 'sign-in'
  return (
    <div className="card-border lg:min-w-[566px]">
<div className="flex flex-col gap-6 card py-14 px-10">
    <div className="flex flex-row gap-2 justify-center">
        <Image src="/logo.svg" alt="logo" height={32} width={38}/>
        <h2 className="text-primary-100">KOGNIFY</h2>
    </div>
    <h3>Practice Job Interviews with AI</h3>
    <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)} className="w-full mt-4 form space-y-6">
    {!isSignIn && (
      <FormField control={form.control} name="name" label="Name" placeholder="Your Name"/>
    )}
    <p>Email</p>
    <p>Password</p>
      <Button type="submit">{isSignIn ? 'Sign In' : 'Create an Account'}</Button>
    </form>
  </Form>
  <p className="text-center">
    {isSignIn ? 'No Account Yet?':'Have an Account Already?'}
    <Link href={!isSignIn ? '/sign-in' : '/sign-up'} className="font-bold text-user-primary ml-1">{!isSignIn ? 'Sign In' : 'Sign Up'}</Link>
  </p>
  </div>
</div>


  )
}

export default AuthForm
