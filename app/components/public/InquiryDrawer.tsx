"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { submitInquiry } from "@/lib/api";

const inquirySchema = z.object({
  name: z.string().min(1, "Name is required"),
  phone: z.string().min(1, "Phone is required"),
  email: z.string().email().optional().or(z.literal("")),
  message: z.string().optional(),
});

type InquiryFormData = z.infer<typeof inquirySchema>;

interface InquiryDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  vehicleId?: number;
  vehicleName?: string;
}

export function InquiryDrawer({
  open,
  onOpenChange,
  vehicleId,
  vehicleName,
}: InquiryDrawerProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<InquiryFormData>({
    resolver: zodResolver(inquirySchema),
    defaultValues: { name: "", phone: "", email: "", message: "" },
  });

  const onSubmit = async (data: InquiryFormData) => {
    setIsSubmitting(true);
    try {
      const res = await submitInquiry({
        name: data.name,
        phone: data.phone,
        email: data.email || undefined,
        message: data.message || undefined,
        vehicle_id: vehicleId,
      });
      if (res.success) {
        toast.success("Inquiry submitted. We'll contact you shortly.");
        reset();
        onOpenChange(false);
      } else {
        toast.error(res.message ?? "Something went wrong.");
      }
    } catch {
      toast.error("Unable to submit. The API may be offline.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="right" className="flex flex-col sm:max-w-md">
        <SheetHeader>
          <SheetTitle>Inquire</SheetTitle>
          <SheetDescription>
            {vehicleName
              ? `Ask about ${vehicleName}`
              : "Send us a message. We'll get back to you soon."}
          </SheetDescription>
        </SheetHeader>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-1 flex-col gap-6 overflow-y-auto py-6"
        >
          <div className="space-y-2">
            <Label htmlFor="inquiry-name">Name *</Label>
            <Input
              id="inquiry-name"
              {...register("name")}
              placeholder="Your name"
              className={errors.name ? "border-red-500" : ""}
            />
            {errors.name && (
              <p className="text-sm text-red-500">{errors.name.message}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="inquiry-phone">Phone *</Label>
            <Input
              id="inquiry-phone"
              type="tel"
              {...register("phone")}
              placeholder="Your phone"
              className={errors.phone ? "border-red-500" : ""}
            />
            {errors.phone && (
              <p className="text-sm text-red-500">{errors.phone.message}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="inquiry-email">Email</Label>
            <Input
              id="inquiry-email"
              type="email"
              {...register("email")}
              placeholder="your@email.com"
              className={errors.email ? "border-red-500" : ""}
            />
            {errors.email && (
              <p className="text-sm text-red-500">{errors.email.message}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="inquiry-message">Message</Label>
            <textarea
              id="inquiry-message"
              {...register("message")}
              rows={4}
              className="flex min-h-[80px] w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              placeholder="Any questions or comments..."
            />
          </div>
          <SheetFooter className="mt-auto">
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Sending…" : "Submit"}
            </Button>
          </SheetFooter>
        </form>
      </SheetContent>
    </Sheet>
  );
}
