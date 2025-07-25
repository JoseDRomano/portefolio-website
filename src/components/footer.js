import React from 'react';
import Image from 'next/image';

const Footer = () => {
    return (
        <>
            <footer className="footer min-h-15 bg-neutral text-neutral-content items-center p-10">
                <div className="flex items-center justify-center w-full gap-20">
                    {/* LinkedIn on the left */}
                    <nav className="flex items-center">
                        <button
                            onClick={() => window.open('https://www.linkedin.com/in/jd-romano/', '_blank')}
                            aria-label="LinkedIn"
                            className="focus:outline-none hover:scale-120 transition-transform"
                            type="button"

                        >
                            <Image
                                src="/linkedin-svgrepo-com.svg"
                                alt="LinkedIn"
                                href="https://www.linkedin.com/in/jd-romano/"
                                width={35}
                                height={35}
                            />
                        </button>
                    </nav>

                    {/* Copyright in center */}
                    <aside className="text-center">
                        <p>Copyright © {new Date().getFullYear()} - All right reserved to José Romano</p>
                    </aside>

                    {/* GitHub on the right */}
                    <nav className="flex items-center">
                        <button
                            onClick={() => window.open('https://www.linkedin.com/in/jd-romano/', '_blank')}
                            aria-label="LinkedIn"
                            className="focus:outline-none hover:scale-120 transition-transform"
                            type="button"
                        >
                            <Image
                                src="/git.png"
                                alt="GitHub"
                                href="https://github.com/JoseDRomano"
                                width={35}
                                height={35}
                            />
                        </button>
                    </nav>
                </div>
            </footer>
        </>
    );
};

export default Footer;