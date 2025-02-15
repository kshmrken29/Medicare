import { Playfair_Display } from 'next/font/google';
import Link from 'next/link';
import Layout from '@/components/login/Layout';
import Logo from '@/components/login/Logo';
import Input from '@/components/login/Input';
import Button from '@/components/login/Button';

const playfair = Playfair_Display({ subsets: ['latin'] });

export default function Signup() {
    return (
        <Layout imageSrc="/signup.jpg" imageAlt="Signup Image">
            <Logo />
            <h2 className={`text-black text-2xl text-center mb-8 ${playfair.className}`}>SIGN UP</h2>

            <form className="space-y-6">
                <div className="flex gap-4">
                    <Input
                        type="text"
                        label="First Name"
                        placeholder="Enter your first name"
                        required
                    />
                    <Input
                        type="text"
                        label="Last Name"
                        placeholder="Enter your last name"
                        required
                    />
                </div>
                
                <Input
                    type="email"
                    label="Email Address"
                    placeholder="Enter your email"
                    required
                />
                <Input
                    type="password"
                    label="Password"
                    placeholder="Enter your password"
                    required
                />
                <Input
                    type="password"
                    label="Confirm Password"
                    placeholder="Confirm password"
                    required
                />

                <div className="flex justify-center mt-8">
                    <Button 
                        type="submit"
                        className="px-8 py-3 text-sm tracking-wider w-3/4"
                        variant="primary"
                    >
                        SIGN UP
                    </Button>
                </div>

                <div className="text-black text-center space-y-2 mt-6">
                    <p className="text-xs tracking-wider">ALREADY REGISTERED?</p>
                    <Link 
                        href="/login" 
                        className="text-green-600 text-xs font-semibold tracking-wider hover:text-green-800"
                    >
                        LOG IN HERE
                    </Link>
                </div>
            </form>
        </Layout>
    );
}