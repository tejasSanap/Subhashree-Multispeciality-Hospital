import React from 'react';
import { Parallax } from 'react-parallax';
import { Link } from 'react-router-dom';
import "./PageNotFound.css";

const PageNotFound = () => {

    return (
        <section id="error">
        <div className="wrapper">
            <div className="container">
                <Parallax strength={300} id="scene" className="scene" data-hover-only="false">
                    <div className="circle" data-depth="1.2"></div>
                    <div className="one" data-depth="0.9">
                        <div className="content">
                            <span className="piece"></span>
                            <span className="piece"></span>
                            <span className="piece"></span>
                        </div>
                    </div>

                    <div className="two" data-depth="0.60">
                        <div className="content">
                            <span className="piece"></span>
                            <span className="piece"></span>
                            <span className="piece"></span>
                        </div>
                    </div>

                    <div className="three" data-depth="0.40">
                        <div className="content">
                            <span className="piece"></span>
                            <span className="piece"></span>
                            <span className="piece"></span>
                        </div>
                    </div>

                    <p className="p404" data-depth="0.50">404</p>
                    <p className="p404" data-depth="0.10">404</p>

                </Parallax>

                <div className="text">
                    <article>
                            <p>Opps! We couldn't find this Page</p>
                            <Link className='text-dark' to="/home">Back To Home</Link>
                    </article>
                </div>

            </div>
        </div>
    </section>
    );
};

export default PageNotFound;