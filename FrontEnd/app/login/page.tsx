'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Playfair_Display } from 'next/font/google';
import Layout from '@/components/login/Layout';
import Logo from '@/components/login/Logo';
import Input from '@/components/login/Input';
import Button from '@/components/login/Button';
import Link from 'next/link';
import { authAPI } from '@/services/api';

const playfair = Playfair_Display({ subsets: ['latin'] });

export default function Login() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        
        try {
            const response = await authAPI.login(email, password);
            if (response.status === 'success') {
                // Store user information in localStorage
                localStorage.setItem('userInfo', JSON.stringify({
                    userType: response.user_type,
                    firstName: response.user.first_name,
                    lastName: response.user.last_name,
                    fullName: `${response.user.first_name} ${response.user.last_name}`,
                    displayName: `${response.user.first_name} ${response.user.last_name} (${response.user_type})`
                }));

                if (response.user_type === 'admin') {
                    router.push('/admin');
                } else {
                    router.push('/dashboard');
                }
            }
        } catch (err: any) {
            setError(err.message || 'Login failed');
        }
    };

    return (
        <Layout imageSrc="/login.jpg" imageAlt="Login Image">
            <Logo />
            <h2 className={`text-black text-2xl text-center mb-8 ${playfair.className}`}>LOGIN</h2>
            
            {error && <p className="text-red-500 text-center mb-4">{error}</p>}
            
            <form className="space-y-6" onSubmit={handleSubmit}>
                <Input
                    type="email"
                    label="Email Address"
                    placeholder="Enter your email"
                    className=" text-black"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <Input
                    type="password"
                    label="Password"
                    placeholder="Enter your password"
                    className=" text-black"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
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
