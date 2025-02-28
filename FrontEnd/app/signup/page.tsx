'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Playfair_Display } from 'next/font/google';
import Link from 'next/link';
import Layout from '@/components/login/Layout';
import Logo from '@/components/login/Logo';
import Input from '@/components/login/Input';
import Button from '@/components/login/Button';
import { authAPI } from '@/services/api';

const playfair = Playfair_Display({ subsets: ['latin'] });

export default function Signup() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        confirm_password: ''
    });
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setSuccessMessage('');
        
        try {
            const response = await authAPI.signup(formData);
            if (response.status === 'success') {
                setSuccessMessage('Successfully signed up!');
                setTimeout(() => {
                    router.push('/login');
                }, 2000);
            }
        } catch (err: any) {
            setError(err.message || 'Signup failed');
        }
    };

    return (
        <Layout imageSrc="/signup.jpg" imageAlt="Signup Image">
            <Logo />
            <h2 className={`text-black text-2xl text-center mb-8 ${playfair.className}`}>SIGN UP</h2>

            {error && <p className="text-red-500 text-center mb-4">{error}</p>}
            {successMessage && <p className="text-green-500 text-center mb-4">{successMessage}</p>}

            <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="flex gap-4">
                    <Input
                        type="text"
                        name="first_name"
                        label="First Name"
                        placeholder="Enter your first name"
                        value={formData.first_name}
                        onChange={handleChange}
                        required
                        className="text-black"
                    />
                    <Input
                        type="text"
                        name="last_name"
                        label="Last Name"
                        placeholder="Enter your last name"
                        value={formData.last_name}
                        onChange={handleChange}
                        required
                        className="text-black"
                    />
                </div>
                
                <Input
                    type="email"
                    name="email"
                    label="Email Address"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="text-black"
                />
                <Input
                    type="password"
                    name="password"
                    label="Password"
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    className="text-black"
                />
                <Input
                    type="password"
                    name="confirm_password"
                    label="Confirm Password"
                    placeholder="Confirm password"
                    value={formData.confirm_password}
                    onChange={handleChange}
                    required
                    className="text-black"
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