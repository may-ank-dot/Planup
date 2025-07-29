import { useForm } from 'react-hook-form'
import {z} from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { signUpSchema } from '~/lib/schema'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '~/components/ui/card'
import { Form, FormControl, FormField, FormItem, FormLabel } from '~/components/ui/form'
import { Input } from '~/components/ui/input'
import { Button } from '~/components/ui/button'
import { Link } from 'react-router'

type SignUpFormData = z.infer<typeof signUpSchema>
const SignUp = () => {
  const form = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
        email: "",
        password: "",
        name: "",
        confirmPassword: "",
    },
  })
  const handleOnSubmit = (values: SignUpFormData) => {
    console.log(values)
  }
  return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-muted/40 p-4'>
        <Card className='max-w-md w-full shadow-xl'>
            <CardHeader className='text-center mb-3'>
                <CardTitle className='text-2xl font-bold'>Create an account</CardTitle> 
                <CardDescription className='text-sm text-muted-foreground'>Create an account to continue</CardDescription>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(handleOnSubmit)}
                    className='space-y-4'>
                        <FormField 
                            control={form.control}
                            name='email'
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>Email Address</FormLabel>
                                    <FormControl>
                                        <Input type="email" placeholder="example@gmail.com" {...field} />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <FormField 
                            control={form.control}
                            name='name'
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>Name</FormLabel>
                                    <FormControl>
                                        <Input type="text" placeholder="example" {...field} />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <FormField 
                            control={form.control}
                            name='password'
                            render={({field}) => (
                                <FormItem>
                                    <div className='flex items-center justify-between'>
                                        <FormLabel>Password</FormLabel>
                                        <Link to="/forgot-password" className="text-sm text-blue-600">
                                            Forgot Password
                                        </Link>
                                    </div>
                                    <FormControl>
                                        <Input type="password" placeholder="********" {...field} />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <FormField 
                            control={form.control}
                            name='confirmPassword'
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>Confirm Password</FormLabel>
                                    <FormControl>
                                        <Input type="password" placeholder="********" {...field} />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <Button type="submit" className='w-full mb-3'>
                            Sign in
                        </Button>
                    </form>
                    <CardFooter>
                        <div className='flex items-center justify-center'>
                            <p className='text-sm text-muted-foreground'>
                                Already have a account ? <Link to="/sign-in">Sign in</Link>
                            </p>

                        </div>
                    </CardFooter>
                </Form>
            </CardContent>
        </Card>
    </div>
  )
}
export default SignUp