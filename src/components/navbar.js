'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

const Navbar = () => {
    const pathname = usePathname();
    const router = useRouter();
    const isChatWithMePage = pathname === '/chatwithme';

    return (
        <div className="navbar bg-[#0a0a0a]/90 backdrop-blur-md shadow-lg">
            <div className="flex-1">
                {isChatWithMePage && (
                    <div className="flex-1 flex justify-start">
                        <button 
                            onClick={() => router.back()}
                            className="btn bg-gray-600 hover:bg-gray-700 border-none text-xl font-extrabold tracking-tight text-white"
                            style={{ marginLeft: '16px', paddingLeft: '12px', paddingRight: '12px' }}
                        >
                            Back
                        </button>
                    </div>
                )}
            </div>
            <div className="flex-[3] flex justify-center items-center">
                <Link href="/chatwithme" className="btn btn-ghost">
                    <img 
                        src="/logo_letters_inv_rem.png" 
                        alt="JR Logo"
                        className="h-16"
                    />
                </Link>
            </div>
            <div className="flex-1 flex justify-end">
                <button 
                    className="btn bg-blue-600 hover:bg-blue-700 border-none text-xl font-extrabold tracking-tight text-white"
                    style={{ marginRight: '16px', paddingLeft: '12px', paddingRight: '12px' }}
                >
                    Book a call!
                </button>
            </div>
        </div>
    );
};

export default Navbar;