"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { LoaderIcon, Mail, MapPin, MessagesSquare, Phone } from "lucide-react";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

interface ContactInfo {
  icon: React.ReactNode;
  title: string;
  description: string;
  value: string;
  href: string;
  badge?: string;
}

const contactInfo: ContactInfo[] = [
  {
    icon: <Mail className="size-6" />,
    title: "Email",
    description: "Get a response within 24 hours",
    value: "hello@company.com",
    href: "mailto:hello@company.com",
    badge: "Recommended",
  },
  {
    icon: <MessagesSquare className="size-6" />,
    title: "Live Chat",
    description: "Instant support available now",
    value: "Start chatting",
    href: "#",
    badge: "Online",
  },
  {
    icon: <Phone className="size-6" />,
    title: "Phone",
    description: "Mon-Fri, 9AM-6PM EST",
    value: "+1 (555) 123-4567",
    href: "tel:+15551234567",
  },
  {
    icon: <MapPin className="size-6" />,
    title: "Office",
    description: "Schedule an in-person meeting",
    value: "123 Innovation St, Tech City",
    href: "#",
  },
];

const contactFormSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email"),
  company: z.string().optional(),
  message: z.string().min(1, "Message is required"),
  agreeToTerms: z.literal(true, {
    errorMap: () => ({ message: "You must agree to the terms" }),
  }),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

interface Contact6Props {
  className?: string;
  onSubmit?: (data: ContactFormData) => Promise<void>;
}

const Contact6 = ({ className, onSubmit }: Contact6Props) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    mode: "onSubmit",
    reValidateMode: "onSubmit",
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      company: "",
      message: "",
      agreeToTerms: undefined,
    },
  });

  const handleFormSubmit = async (data: ContactFormData) => {
    try {
      if (onSubmit) {
        await onSubmit(data);
      } else {
        console.log("Form submitted:", data);
        await new Promise((resolve) => setTimeout(resolve, 1000));
      }
      setIsSubmitted(true);
      setShowSuccess(true);
      form.reset();
      setTimeout(() => setShowSuccess(false), 4500);
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch {
      form.setError("root", {
        message: "Something went wrong. Please try again.",
      });
    }
  };

  return (
    <section className={cn("bg-background py-24", className)}>
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-4xl">
          <div className="mb-16 text-center">
            <h1 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Contact Us
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Ready to start your next project? Our team is here to help you
              succeed. Reach out and let's discuss how we can bring your ideas
              to life.
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-2">
            <div className="space-y-6">
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="border-0 bg-muted shadow-none">
                    <CardContent>
                      <div className="flex items-start gap-4">
                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-muted">
                          {info.icon}
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="mb-1 flex items-center gap-2">
                            <h3 className="font-semibold">{info.title}</h3>
                          </div>
                          <p className="mb-2 text-sm text-muted-foreground">
                            {info.description}
                          </p>
                          <a
                            href={info.href}
                            className="text-sm font-medium transition-colors hover:underline"
                          >
                            {info.value}
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <Card className="border-0 shadow-none">
              <CardHeader>
                <CardTitle>Send us a message</CardTitle>
                <p className="text-sm text-muted-foreground">
                  Fill out the form below and we'll get back to you within 24
                  hours.
                </p>
              </CardHeader>
              <CardContent>
                {isSubmitted && (
                  <div
                    className={cn(
                      "mb-6 rounded-lg border border-green-500/20 bg-green-500/10 p-4 text-center transition-opacity duration-500",
                      showSuccess ? "opacity-100" : "opacity-0",
                    )}
                  >
                    <p className="text-sm font-medium text-green-600 dark:text-green-400">
                      Message sent successfully!
                    </p>
                  </div>
                )}

                <form onSubmit={form.handleSubmit(handleFormSubmit)}>
                  <FieldGroup>
                    <div className="grid grid-cols-2 gap-4">
                      <Controller
                        control={form.control}
                        name="firstName"
                        render={({ field, fieldState }) => (
                          <Field data-invalid={fieldState.invalid}>
                            <FieldLabel htmlFor={field.name}>
                              First Name{" "}
                              <span className="text-destructive">*</span>
                            </FieldLabel>
                            <Input
                              {...field}
                              id={field.name}
                              aria-invalid={fieldState.invalid}
                              placeholder="John"
                            />
                            {fieldState.invalid && (
                              <FieldError errors={[fieldState.error]} />
                            )}
                          </Field>
                        )}
                      />

                      <Controller
                        control={form.control}
                        name="lastName"
                        render={({ field, fieldState }) => (
                          <Field data-invalid={fieldState.invalid}>
                            <FieldLabel htmlFor={field.name}>
                              Last Name{" "}
                              <span className="text-destructive">*</span>
                            </FieldLabel>
                            <Input
                              {...field}
                              id={field.name}
                              aria-invalid={fieldState.invalid}
                              placeholder="Doe"
                            />
                            {fieldState.invalid && (
                              <FieldError errors={[fieldState.error]} />
                            )}
                          </Field>
                        )}
                      />
                    </div>

                    <Controller
                      control={form.control}
                      name="email"
                      render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                          <FieldLabel htmlFor={field.name}>
                            Email Address{" "}
                            <span className="text-destructive">*</span>
                          </FieldLabel>
                          <Input
                            {...field}
                            id={field.name}
                            type="email"
                            aria-invalid={fieldState.invalid}
                            placeholder="john@company.com"
                          />
                          {fieldState.invalid && (
                            <FieldError errors={[fieldState.error]} />
                          )}
                        </Field>
                      )}
                    />

                    <Controller
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <Field>
                          <FieldLabel htmlFor={field.name}>Company</FieldLabel>
                          <Input
                            {...field}
                            id={field.name}
                            placeholder="Your Company"
                          />
                        </Field>
                      )}
                    />

                    <Controller
                      control={form.control}
                      name="message"
                      render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                          <FieldLabel htmlFor={field.name}>
                            Message <span className="text-destructive">*</span>
                          </FieldLabel>
                          <Textarea
                            {...field}
                            id={field.name}
                            aria-invalid={fieldState.invalid}
                            placeholder="Tell us about your project, goals, or how we can help..."
                            rows={4}
                            className="resize-none"
                          />
                          {fieldState.invalid && (
                            <FieldError errors={[fieldState.error]} />
                          )}
                        </Field>
                      )}
                    />

                    <Controller
                      control={form.control}
                      name="agreeToTerms"
                      render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                          <div className="flex items-start space-x-3">
                            <Checkbox
                              id={field.name}
                              checked={field.value}
                              onCheckedChange={field.onChange}
                              aria-invalid={fieldState.invalid}
                            />
                            <label
                              htmlFor={field.name}
                              className="text-sm leading-relaxed text-muted-foreground"
                            >
                              I agree to the{" "}
                              <a
                                href="#"
                                className="font-medium text-foreground hover:underline"
                              >
                                Terms of Service
                              </a>{" "}
                              and{" "}
                              <a
                                href="#"
                                className="font-medium text-foreground hover:underline"
                              >
                                Privacy Policy
                              </a>
                            </label>
                          </div>
                          {fieldState.invalid && (
                            <FieldError errors={[fieldState.error]} />
                          )}
                        </Field>
                      )}
                    />

                    {form.formState.errors.root && (
                      <p className="text-sm text-destructive">
                        {form.formState.errors.root.message}
                      </p>
                    )}

                    <Button
                      type="submit"
                      className="w-full"
                      disabled={form.formState.isSubmitting}
                    >
                      {form.formState.isSubmitting ? (
                        <>
                          <LoaderIcon className="mr-2 size-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        "Submit"
                      )}
                    </Button>
                  </FieldGroup>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12">
            <Separator className="mb-8" />
            <Card className="border-0 bg-muted shadow-none">
              <CardContent className="p-6">
                <div className="grid gap-8 md:grid-cols-2">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Office Hours</h3>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex justify-between">
                        <span>Monday - Friday</span>
                        <span>9:00 AM - 6:00 PM EST</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Saturday</span>
                        <span>10:00 AM - 4:00 PM EST</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sunday</span>
                        <span>Closed</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">
                      Contact Information
                    </h3>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex justify-between">
                        <span>Email</span>
                        <span>hello@company.com</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Phone</span>
                        <span>+1 (555) 123-4567</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Address</span>
                        <span>123 Innovation St, Tech City</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Contact6 };
