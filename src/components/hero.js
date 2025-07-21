'use client';
import React from 'react';

import Image from 'next/image';

const Hero = () => {
    return (
        <>


            {/* Logo Layer */}
            <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                <Image src="/logo.png" alt="Logo" width={200} height={200} priority />
            </div>
            

        </>
    );
};

export default Hero;