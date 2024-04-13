
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

import { useToast } from "@/components/ui/use-toast"
import {Form,FormControl,FormDescription,FormField,FormItem,FormLabel,FormMessage} from "@/components/ui/form"

import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom"
import { SigninValidation } from "@/lib/validation"
import {  useSignInAccount } from "@/lib/react-query/queriesAndMutations"
import { useUserContext } from "@/context/AuthContext"
import { Loader } from "@/components/shared/Loader"

const SigninForm = () => {
 const { toast } = useToast()
 const navigate = useNavigate();

 const {checkAuthUser, isLoading:isUserLoading} = useUserContext()

 const form = useForm<z.infer<typeof SigninValidation>>({
  resolver: zodResolver(SigninValidation),
  defaultValues: {
    email: "",
    password: "",

  },
})
// Queries

 const{mutateAsync: signInAccount} = useSignInAccount();




  async function onSubmit(values: z.infer<typeof SigninValidation>) {
    //create user
    const session = await signInAccount({
      email: values.email,
      password: values.password,
    
    })

    if(!session){
      return toast({title:'Sign in failed. Please try again'})
    }

    const isLoggedIn = await checkAuthUser();

    if(isLoggedIn){
      form.reset();
      navigate('/')
    } else{
      return toast({title:'Sign up failed. Please try again'})
    }
  }
  return (

    <div>
      <Form {...form}>
      <div className="sm:w-420 flex-center flex-col">
        <img src="/assets/images/logo.svg"/>
        <h2 className="h3-bold md:h2-bold pt-5 sm:pt-12">Login to your account</h2>
        <p className="text-light-3 small-medium md:base-regular mt-2">Welcome back!</p>
     

      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-5 w-full mt-4">
        
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>e-mail</FormLabel>
              <FormControl>
                <Input type="email" className="shad-input" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>password</FormLabel>
              <FormControl>
                <Input type="password" className="shad-input" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="shad-button_primary">
        {
          isUserLoading?(
          <div className="flex-center gap-2">
             <Loader/> Loading...
          </div>):"Sign in"
        }
        </Button>

        <p className="text-small-regular test-light-2 text-center mt-2">
          Don't have an account?
          <Link to="/sign-up" className="text-primary-500 text-small-semibold ml-1">Sign Up</Link>
        </p>
      </form>
      </div>
    </Form>
    </div>
    
  )

}

export default SigninForm
