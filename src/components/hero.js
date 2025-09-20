'use client';
import React from 'react';

import Image from 'next/image';
import TextType from '../TextAnimations/TextType/TextType';
import Timeline from './Timeline/Timeline';


const Hero = () => {
    return (

        <div className="hero h-[calc(100vh-140px)] flex items-center justify-center">
            <div className="backdrop-blur-md bg-white/15 rounded-2xl shadow-lg w-[95%] max-w-[1100px] flex flex-col lg:flex-row items-center gap-8">
                <div style={{ paddingLeft: '48px' }} className="bg-transparent">
                    <img
                        src="/logo.png"
                        className="max-w-[250px] rounded-lg bg-transparent"
                    />
                </div>
                <div className="mt-6 lg:mt-0 lg:ml-12 text-center lg:text-left flex-1 px-8">
                    <div className="text-5xl font-extrabold tracking-tight break-words text-center">
                        José D. Romano - AI Engineer
                    </div>
                    <br />
                    <br />
                    <div className="text-4xl font-extrabold tracking-tight break-words pt-8">
                        <TextType
                            text={["I transform data in decisions", "Data is the new oil"]}
                            typingSpeed={75}
                            pauseDuration={1500}
                            showCursor={true}
                            cursorCharacter="_"
                            className="!text-current"
                            textColors={["currentColor"]}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;