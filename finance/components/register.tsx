"use client"

import { zodResolver } from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form"
import {z} from 'zod'
import { FormControl, FormDescription, FormField, Form, FormItem, FormLabel, FormMessage } from "./ui/form";
import {Input} from '@/components/ui/input'
import ShinyButton from "./ui/shiny-button";
import PulsatingButton from "./ui/pulsating-button";

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
        <main>
            <h1 className="text-amber-500 scroll-m-20 border-b pb-2 text-3xl font-sans tracking-tight first:mt-0 mb-10">
                Finance App
            </h1>
            <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="bg-foreground">
            <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                <FormItem>
                    <FormLabel className="text-white font-semibold">Username</FormLabel>
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
                    <FormLabel className="text-white font-semibold">Email</FormLabel>
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
            <div className="mt-5">
                <PulsatingButton type="submit">Submit</PulsatingButton>
            </div>
            </form>
        </Form>
      </main>
    )
}