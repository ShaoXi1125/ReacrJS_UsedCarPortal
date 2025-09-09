import RegisteredUserController from '@/actions/App/Http/Controllers/Auth/RegisteredUserController';
import { login } from '@/routes';
import { Form, Head } from '@inertiajs/react';
import { LoaderCircle } from 'lucide-react';

import InputError from '@/components/input-error';
import TextLink from '@/components/text-link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AuthLayout from '@/layouts/auth-layout';

export default function Register() {
    return (
        <AuthLayout
            title="Create an account"
            description="Enter your details below to create your account"
        >
            <Head title="Register" />
            <Form
                {...RegisteredUserController.store.form()}
                resetOnSuccess={['password', 'password_confirmation']}
                disableWhileProcessing
                className="flex flex-col gap-6"
            >
                {({ processing, errors }) => (
                    <>
                        <div className="grid gap-6">
                            {/* Name */}
                            <div className="grid gap-2">
                                <Label htmlFor="name" className="text-gray-800">
                                    Name
                                </Label>
                                <Input
                                    id="name"
                                    type="text"
                                    required
                                    autoFocus
                                    tabIndex={1}
                                    autoComplete="name"
                                    name="name"
                                    placeholder="Full name"
                                    className="bg-white border border-gray-300 text-gray-900 placeholder-gray-400"
                                />
                                <InputError message={errors.name} className="mt-2" />
                            </div>

                            {/* Email */}
                            <div className="grid gap-2">
                                <Label htmlFor="email" className="text-gray-800">
                                    Email address
                                </Label>
                                <Input
                                    id="email"
                                    type="email"
                                    required
                                    tabIndex={2}
                                    autoComplete="email"
                                    name="email"
                                    placeholder="email@example.com"
                                    className="bg-white border border-gray-300 text-gray-900 placeholder-gray-400"
                                />
                                <InputError message={errors.email} />
                            </div>

                            {/* Password */}
                            <div className="grid gap-2">
                                <Label htmlFor="password" className="text-gray-800">
                                    Password
                                </Label>
                                <Input
                                    id="password"
                                    type="password"
                                    required
                                    tabIndex={3}
                                    autoComplete="new-password"
                                    name="password"
                                    placeholder="Password"
                                    className="bg-white border border-gray-300 text-gray-900 placeholder-gray-400"
                                />
                                <InputError message={errors.password} />
                            </div>

                            {/* Confirm Password */}
                            <div className="grid gap-2">
                                <Label htmlFor="password_confirmation" className="text-gray-800">
                                    Confirm password
                                </Label>
                                <Input
                                    id="password_confirmation"
                                    type="password"
                                    required
                                    tabIndex={4}
                                    autoComplete="new-password"
                                    name="password_confirmation"
                                    placeholder="Confirm password"
                                    className="bg-white border border-gray-300 text-gray-900 placeholder-gray-400"
                                />
                                <InputError message={errors.password_confirmation} />
                            </div>

                            {/* Submit */}
                            <Button
                                type="submit"
                                className="mt-2 w-full bg-blue-600 text-white hover:bg-blue-700"
                                tabIndex={5}
                                disabled={processing}
                            >
                                {processing && <LoaderCircle className="h-4 w-4 animate-spin" />}
                                Create account
                            </Button>
                        </div>

                        {/* Already have account */}
                        <div className="text-center text-sm text-gray-600">
                            Already have an account?{' '}
                            <TextLink
                                href={login()}
                                className="text-blue-600 hover:text-blue-700"
                                tabIndex={6}
                            >
                                Log in
                            </TextLink>
                        </div>
                    </>
                )}
            </Form>
        </AuthLayout>
    );
}
