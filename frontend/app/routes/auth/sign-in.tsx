import { useForm } from 'react-hook-form'
import {z} from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { signInSchema } from '~/lib/schema'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '~/components/ui/card'
import { Form, FormControl, FormField, FormItem, FormLabel } from '~/components/ui/form'
import { Input } from '~/components/ui/input'
import { Button } from '~/components/ui/button'
import { Link } from 'react-router'

type SigninFormData = z.infer<typeof signInSchema>
const SignIn = () => {
  const form = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
        email: "",
        password: "",
    },
  })
  const handleOnSubmit = (values: SigninFormData) => {
    console.log(values)
  }
  return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-muted/40 p-4'>
        <Card className='max-w-md w-full shadow-xl'>
            <CardHeader className='text-center mb-3'>
                <CardTitle className='text-2xl font-bold'>Sign In</CardTitle> 
                <CardDescription className='text-sm text-muted-foreground'>Sign in to your account to continue</CardDescription>
            </CardHeader>
            <CardContent className='mb-2'>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(handleOnSubmit)}
                    className='space-y-6'>
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
                            name='password'
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>Password</FormLabel>
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
                                Don&apos;t have an account? <Link to="/sign-up">Sign up</Link>
                            </p>

                        </div>
                    </CardFooter>
                </Form>
            </CardContent>
        </Card>
    </div>
  )
}

export default SignIn