import React from 'react';
import style from './BlogDetail.module.css';


const BlogDetail = ({blogs}) => {
    if(!blogs) return '';
    else return (
        <div className={style.container}>
            <section className={style.blogDetail}>
                <h2 className={style.blogTitle}>{blogs.title}</h2>
                <img src={blogs.cover} className={style.blogCover} alt="" />
                <p style={{fontWeight: '500', marginTop: '2rem', marginBottom: '2rem', textAlign: 'center'}}>{blogs.intro}</p> {/* inline CSS van introduction */}
                <p className={style.descriptionText}>{blogs.description}</p>
            </section>
            <div className={style.album}>
                {   
                    blogs.album.map((album, index) => { //om array van images weer te geven
                        return (<img key={index} src={album} alt="" style={{width: '300px', height: '400px', padding: '1% 3% 3% 3%', objectFit: 'cover'}}/>) //inline CSS van images uit album
                    })
                }
            </div>
        </div>
    );
};

export default BlogDetail;
