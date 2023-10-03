import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate, useParams } from 'react-router-dom';
import ROUTES from '../../Consts/Routes';
import BlogDetail from '../../Components/Detail/DetailPost/BlogDetail';
import style from './Detail.module.css';
import Loading from '../../Components/Global/Loading/Loading';

const Detail = () => {
    const [blogs, setBlogs] = useState(false);

    const { id } = useParams(); // id is een parameter, id wordt gebruikt in mijn Link (/detail/:id), in Blog component gebruik ik de id parameter als slug
    const navigate = useNavigate(); //wordt gebruikt om te kunnen navigeren naar andere paginas

    //Fetch data
    useEffect(() => {
        let isActive = true;

        fetch('../blogData.json') //http://localhost:3000/blog.json
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(isActive) {
                const filteredData = data.filter(blog => id === blog.slug)[0] //[0] is om object uit array te halen
                //met blog.slug vergelijk ik de de parameter id met de slug van de blog
                //die slug moet ik dan ook in mijn Link vermelden in Blog.jsx
                if(filteredData)setBlogs(filteredData)
                else {
                    const goToHomePage = () => navigate(ROUTES.home); 
                    goToHomePage();
                }
            }
        })
        return () => isActive = false;
      }, [])

    if(!blogs) return (<Loading/>)
    return (
        <div>
            <Link to="/" className={style.arrow}>&larr;</Link>
            {/* verwijst terug naar de home pagina */}
            <BlogDetail blogs={blogs}/> 
        </div>
    );
};

export default Detail;
