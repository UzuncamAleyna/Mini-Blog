import React from 'react';
import style from './Blog.module.css';
import { Link } from 'react-router-dom';
import ROUTES from '../../../Consts/Routes';


const Blog = ({blogs}) => {
    if(!blogs) return '';
    else return (
        <Link to={`${ROUTES.detail.to}${blogs.slug}`} style={{ textDecoration: 'none', color: 'black' }}> {/* id parameter wordt vervangen door slug */}
            <div>
                <article className={style.blogPost}>
                    <img src={blogs.cover} className={style.image} alt="" />
                    <div className={style.text}>
                        <h2>{blogs.title}</h2>
                        <p>{blogs.intro}</p>
                    </div>
                </article>
            </div>
        </Link>
    );
};

export default Blog;
