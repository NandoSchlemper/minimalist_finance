"use client"

import { zodResolver } from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form"
import {z} from 'zod'
import { FormControl, FormDescription, FormField, Form, FormItem, FormLabel, FormMessage } from "./ui/form";
import {Input} from '@/components/ui/input'
import PulsatingButton from "./ui/pulsating-button";
import GradualSpacing from "./ui/gradual-spacing";

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
            <GradualSpacing
                className="font-display tracking-wild text-center text-1xl font-sans -tracking-widest after:w-full after:h-1 text-amber-500 dark:text-white md:text-6xl md-10 inline-block"
                text="Finances"
            />

            <div className="flex-h mt-10">
            <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="bg-foreground">
            <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                <FormItem>
                    <FormLabel className="text-white font-semibold">Username</FormLabel>
                    <FormControl>
                    <Input placeholder="shadcn" className="text-white" {...field} />
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
                    <Input placeholder="shadcn" className="text-white"{...field} />
                    </FormControl>
                    <FormDescription>
                    This is your email, it's private
                    </FormDescription>
                    <FormMessage />
                </FormItem>
                )}
            />
            <div className="mt-5">
                <PulsatingButton className="bg-#FFBF00 font-sans" pulseColor="#FFBF00" type="submit"  >Submit</PulsatingButton>
            </div>
            </form>
        </Form>
        </div>
      </main>
    )
}