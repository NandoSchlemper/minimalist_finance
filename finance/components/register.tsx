"use client"

import { zodResolver } from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form"
import {z} from 'zod'
import { FormControl, FormDescription, FormField, Form, FormItem, FormLabel, FormMessage } from "./ui/form";
import {Button} from '@/components/ui/button'
import {Input} from '@/components/ui/input'

// Declaring the schema of Login
const formSchema = z.object({
    username: z.string().min(2, {
        message: "Must insert username"
    }),

    email: z.string().email({
        message: "Must insert an Email"
    })
})

export function Register() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            email: ""
        }
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
    }

    return (
        <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 bg-foreground">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="shadcn" {...field} />
                </FormControl>
                <FormDescription>
                  This is your public display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

        <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="shadcn" {...field} />
                </FormControl>
                <FormDescription>
                  This is your email, it's private
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    )
}