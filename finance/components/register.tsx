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
            <div className="scroll-m-20 border-b pb-2 text-3xl font-sans tracking-tight first:mt-0">
            <GradualSpacing
                className="text-yellow-400 border-black border-double"
                text="Finances"
            />
            </div>

            <div className="flex-h mt-10">
            <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="bg-zinc-900">
            <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                <FormItem>
                    <FormLabel className="font-semibold text-white">Username</FormLabel>
                    <FormControl>
                    <Input className="text-white" placeholder="shadcn" {...field} />
                    </FormControl>
                    <FormMessage />
                </FormItem>
                )}
            />

            <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                <FormItem>
                    <FormLabel className="font-semibold text-white">Email</FormLabel>
                    <FormControl>
                    <Input className="text-white" placeholder="shadcn"{...field} />
                    </FormControl>
                    <FormMessage />
                </FormItem>
                )}
            />
            <div className="mt-5">
                <PulsatingButton className="text-black font-sans bg-yellow-300" pulseColor="#FFEA00" type="submit"  >Submit</PulsatingButton>
            </div>
            </form>
        </Form>
        </div>
      </main>
    )
}