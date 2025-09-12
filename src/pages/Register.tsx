import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import emailjs from '@emailjs/browser';

const schema = z.object({
  fullName: z.string().min(2, 'Full name is required'),
  email: z.string().email('Valid email required'),
  phone: z.string().min(7, 'Phone number is required'),
  department: z.enum(['AI & DS', 'CS', 'IT', 'EN & TC', 'Mechanical'], {
    errorMap: () => ({ message: 'Select branch / department' }),
  }),
  year: z.enum(['1', '2', '3', '4'], { errorMap: () => ({ message: 'Select year of study' }) }),
  interests: z.string().optional(),
  whyJoin: z.string().min(5, 'Please tell us why you want to join'),
  role: z.enum(['core', 'technical', 'events', 'content', 'other']).optional(),
  roleOther: z.string().optional(),
  declaration: z.literal(true, { errorMap: () => ({ message: 'You must confirm the declaration' }) }),
}).refine((data) => (data.role !== 'other' ? true : (data.roleOther ?? '').trim().length > 0), {
  path: ['roleOther'],
  message: 'Please specify your preferred role',
});

type FormValues = z.infer<typeof schema>;

const Register = () => {
  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      department: undefined as unknown as FormValues['department'],
      year: undefined as unknown as FormValues['year'],
      interests: '',
      whyJoin: '',
      role: undefined,
      roleOther: '',
      declaration: false,
    },
  });

  const onSubmit = async (values: FormValues) => {
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID as string;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string;
    const toEmail = (import.meta.env.VITE_EMAILJS_TO_EMAIL as string) || '';

    if (!serviceId || !templateId || !publicKey) {
      alert('Email service is not configured. Please set VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, and VITE_EMAILJS_PUBLIC_KEY.');
      return;
    }

    const toOrdinal = (v: string) => ({'1':'1st Year','2':'2nd Year','3':'3rd Year','4':'4th Year'}[v] || v);
    const templateParams = {
      full_name: values.fullName,
      email: values.email,
      phone: values.phone,
      department: values.department,
      // Synonyms for template compatibility
      branch: values.department,
      Branch: values.department,
      year: values.year,
      year_of_study: values.year,
      Year: toOrdinal(values.year),
      interests: values.interests || '-',
      skills: values.interests || '-',
      skills_interests: values.interests || '-',
      why_join: values.whyJoin,
      reason: values.whyJoin,
      reason_to_join: values.whyJoin,
      Reason: values.whyJoin,
      role: values.role || '-',
      role_other: values.roleOther || '-',
      submitted_at: new Date().toLocaleString(),
      // Common EmailJS generic fields to satisfy many templates
      from_name: values.fullName,
      from_email: values.email,
      reply_to: values.email,
      to_email: toEmail,
      message: `Why Join: ${values.whyJoin}\nInterests: ${values.interests || '-'}\nRole: ${values.role || '-'} (${values.roleOther || '-'})`,
    } as const;

    try {
      // Ensure SDK is initialized (idempotent)
      try { emailjs.init({ publicKey }); } catch {}
      await emailjs.send(serviceId, templateId, templateParams);
      alert('Thanks for registering! Your details have been sent.');
      form.reset();
    } catch (err) {
      console.error('EmailJS send failed:', err);
      alert('Sorry, there was a problem sending your registration. Please verify your internet connection and try again.');
    }
  };

  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 neural-bg opacity-30" />
      <div className="container mx-auto px-4 relative z-10 max-w-2xl">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Join <span className="text-gradient-primary">ROI Tech Club</span></h1>
          <p className="text-muted-foreground">Fill this form to become a member.</p>
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 p-8 rounded-2xl bg-card border border-card-border">
            <FormField name="fullName" control={form.control} render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input placeholder="Your full name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />

            <FormField name="email" control={form.control} render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="you@college.edu" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />

            <FormField name="phone" control={form.control} render={({ field }) => (
              <FormItem>
                <FormLabel>Phone (optional)</FormLabel>
                <FormControl>
                  <Input placeholder="+91 ..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />

            <div className="grid md:grid-cols-2 gap-6">
              <FormField name="department" control={form.control} render={({ field }) => (
                <FormItem>
                  <FormLabel>Branch / Department</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="bg-card text-foreground">
                        <SelectValue placeholder="Select branch / department" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="AI & DS">AI & DS</SelectItem>
                      <SelectItem value="CS">CS</SelectItem>
                      <SelectItem value="IT">IT</SelectItem>
                      <SelectItem value="EN & TC">EN & TC</SelectItem>
                      <SelectItem value="Mechanical">Mechanical</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )} />

              <FormField name="year" control={form.control} render={({ field }) => (
                <FormItem>
                  <FormLabel>Year of Study</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="bg-card text-foreground">
                        <SelectValue placeholder="Select year" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="1">1st Year</SelectItem>
                      <SelectItem value="2">2nd Year</SelectItem>
                      <SelectItem value="3">3rd Year</SelectItem>
                      <SelectItem value="4">4th Year</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )} />
            </div>

            <FormField name="interests" control={form.control} render={({ field }) => (
              <FormItem>
                <FormLabel>Interests (optional)</FormLabel>
                <FormControl>
                  <Textarea rows={4} placeholder="LLMs, Vision, Robotics..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />

            <FormField name="whyJoin" control={form.control} render={({ field }) => (
              <FormItem>
                <FormLabel>Why do you want to join the ROI Tech Club?</FormLabel>
                <FormControl>
                  <Textarea rows={4} placeholder="Tell us your motivation..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />

            <div className="grid md:grid-cols-2 gap-6">
              <FormField name="role" control={form.control} render={({ field }) => (
                <FormItem>
                  <FormLabel>Preferred Role in Club (optional)</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="bg-card text-foreground">
                        <SelectValue placeholder="Select role" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="core">Core Member</SelectItem>
                      <SelectItem value="technical">Technical Team</SelectItem>
                      <SelectItem value="events">Event Organizing</SelectItem>
                      <SelectItem value="content">Content/Design</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )} />

              <FormField name="roleOther" control={form.control} render={({ field }) => (
                <FormItem>
                  <FormLabel>If Other, please specify</FormLabel>
                  <FormControl>
                    <Input placeholder="Your preferred role" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )} />
            </div>

            <FormField name="declaration" control={form.control} render={({ field }) => (
              <FormItem>
                <div className="flex items-start gap-3">
                  <FormControl>
                    <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                  </FormControl>
                  <div>
                    <FormLabel>Declaration</FormLabel>
                    <p className="text-sm text-muted-foreground">I confirm that the information provided above is correct.</p>
                  </div>
                </div>
                <FormMessage />
              </FormItem>
            )} />

            <Button type="submit" className="w-full bg-gradient-primary hover:glow-primary">Submit Registration</Button>
          </form>
        </Form>
      </div>
    </section>
  );
};

export default Register;


