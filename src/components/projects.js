import React from 'react';


const Projects = () => {
    return (
        <div className="carousel carousel-center w-full space-x-4 p-4 bg-base-200 rounded-box overflow-x-auto whitespace-nowrap">
            {/* Slide 1 */}
            <div className="carousel-item">
                <div className="card w-96 bg-base-100 shadow-sm">
                    <figure>
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                            alt="Shoes"
                        />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Landing Page</h2>
                        <p>Projecto React + Tailwind focado em responsividade.</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Ver código</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Slide 1 */}
            <div className="carousel-item">
                <div className="card w-96 bg-base-100 shadow-sm">
                    <figure>
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                            alt="Shoes"
                        />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Landing Page</h2>
                        <p>Projecto React + Tailwind focado em responsividade.</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Ver código</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Slide 1 */}
            <div className="carousel-item">
                <div className="card w-96 bg-base-100 shadow-sm">
                    <figure>
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                            alt="Shoes"
                        />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Landing Page</h2>
                        <p>Projecto React + Tailwind focado em responsividade.</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Ver código</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;