"use client";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

const loginFormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6, {
    message: "Kata sandi minimal 8 karakter",
  }),
});

export default function page() {
  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof loginFormSchema>) {
    console.log(values);
  }

  return (
    <div className="h-screen w-screen grid grid-cols-5">
      <section id="greeting-pic" className="col-span-3 h-full bg-green-100"></section>
      <section id="login-form" className="col-span-2 h-full flex items-center">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4 w-[70%] mx-auto"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Masukkan email" {...field} />
                  </FormControl>
                  <FormDescription>
                    Email yang digunakan untuk login
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Kata Sandi</FormLabel>
                  <FormControl>
                    <Input placeholder="Masukkan kata sandi" {...field} />
                  </FormControl>
                  <FormDescription>
                    Kata sandi yang digunakan untuk login
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex items-center space-x-2">
              <Checkbox id="remember-me" />
              <label
                htmlFor="remember-me"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Ingat saya
              </label>
            </div>
            <Button type="submit" className="w-full">
              Login
            </Button>
          </form>
        </Form>
      </section>
    </div>
  );
}
