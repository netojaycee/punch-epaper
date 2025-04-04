"use client";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { Bounce, toast } from "react-toastify";
import Axios from "@/app/lib/Axios";

export const formSchema = z.object({
  fullName: z.string().min(3, "Full Name is required"),
  email: z.string().email("Invalid email address"),
  phoneNumber: z.string().min(10, "Phone number must be at least 10 digits"),
  message: z.string().min(5, "Message must be at least 5 characters"),
});

export type contactUs = z.infer<typeof formSchema>;

const useSubmit = () => {
  const [success, setSuccess] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [complete, setComplete] = useState(false);
  const router = useRouter();

  // const { handleStatus } = useTenant();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {},
  });

  // console.log(form.getValues());

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (body: any) => {
      const { data } = await Axios.post(`/contact/us/`, body);
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["oml@contact"] });
      setLoading(false);
      setSuccess(true);
      form.reset();
      toast.success("Message sent successfully", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      router.refresh();
    },
    onError() {
      // console.log(error);
      setLoading(false);
      toast.error("An error occurred while saving", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    mutation.mutate(values);
  }

  return {
    onSubmit,
    form,
    errors: form.formState.errors,
    success,
    loading,
    complete,
    setComplete,
  };
};

export default useSubmit;
