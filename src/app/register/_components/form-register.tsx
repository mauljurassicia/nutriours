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
import { FcGoogle } from "react-icons/fc";
import Divider from "@/components/ui/divider";

const loginFormSchema = z
  .object({
    email: z.string().email(),
    password: z
      .string()
      .min(8, {
        message: "Kata sandi minimal 8 karakter",
      })
      .refine(
        (password) =>
          /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/.test(password),
        {
          message:
            "Kata sandi harus mengandung huruf besar, huruf kecil, angka, dan simbol",
        }
      ),
    confirmPassword: z.string().min(8, {
      message: "Konfirmasi kata sandi minimal 8 karakter",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Konfirmasi kata sandi tidak cocok",
  });

export default function FormRegister() {
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
    <section
      id="login-form"
      className="col-span-2 h-full flex flex-col space-y-4 justify-center"
    >
      <header>
        <h1 className="text-xl font-bold text-center text-green-900">
          Yuk Daftar di{" "}
          <span className="text-green-600 text-2xl">NutriYours</span>{" "}
        </h1>
        <p className="text-center text-green-950 text-xs">
          Your Nutritions Truly Yours.
        </p>
      </header>

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
                  Email yang digunakan untuk Mendaftar
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
                  Kata sandi memilki minimal 8 karakter dan terdiri dari huruf
                  kapital, huruf kecil, angka, dan simbol
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Konfirmasi Kata Sandi</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Masukkan konfirmasi kata sandi"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full">
            Daftar
          </Button>

          <Divider />

          <Button type="button" variant="outline" className="w-full">
            Daftar dengan Google <FcGoogle />
          </Button>
        </form>
      </Form>
    </section>
  );
}
