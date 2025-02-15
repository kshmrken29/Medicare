import { Playfair_Display } from 'next/font/google';
import Layout from '@/components/login/Layout';
import Logo from '@/components/login/Logo';
import Input from '@/components/login/Input';
import Button from '@/components/login/Button';
import Link from 'next/link';


const playfair = Playfair_Display({ subsets: ['latin'] });

export default function Login() {
    return (
        <Layout imageSrc="/login.jpg" imageAlt="Login Image">
            <Logo />
            <h2 className={`text-black text-2xl text-center mb-8 ${playfair.className}`}>LOGIN</h2>
            
            <form className="space-y-6">
                <Input
                    type="email"
                    label="Email Address"
                    placeholder="Enter your email"
                    className="bg-gray-100"
                />
                <Input
                    type="password"
                    label="Password"
                    placeholder="Enter your password"
                    className="bg-gray-100"
                />
                
                <div className="flex justify-center mt-8">
                    <Button 
                        type="submit"
                        className="px-8 py-3 text-sm tracking-wider"
                        variant="primary"
                    >
                        SIGN IN
                    </Button>
                </div>

                <div className="text-black text-center space-y-2 mt-6">
                    <p className="text-xs tracking-wider">DON'T HAVE AN ACCOUNT?</p>
                    <Link 
                        href="/signup" 
                        className="text-green-600 text-xs font-semibold tracking-wider hover:text-green-800"
                    >
                        SIGN UP NOW
                    </Link>
                </div>
            </form>
        </Layout>
    );
}
