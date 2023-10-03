import { useEffect, useState } from 'react';
import Loading from "../../Components/Global/Loading/Loading"
import style from './Home.module.css';
import Blog from '../../Components/Home/BlogPost/Blog';

const Home = () => {
    const [blogs, setBlogs] = useState([]); // blogs is een array
    const [filteredData, setFilteredData] = useState();
    const [formData, setFormdata] = useState("") // formData is een string


    const filter1 = () => { 
        let dataCopy = structuredClone(blogs); //een kopie van de array met blogs wordt gemaakt

        dataCopy = dataCopy.filter(blog => blog.title.toLowerCase().includes(formData.toLocaleLowerCase())); // kopie wordt gefilterd
        setFilteredData(dataCopy) //gefilterde kopie in state zetten
    }

    const filter2 = () => {
        let dataCopy = structuredClone(blogs);

        dataCopy = dataCopy.filter(blog => blog.intro.toLowerCase().includes(formData.toLocaleLowerCase()));
        setFilteredData(dataCopy)
    }
    
    //Fetch data
    useEffect(() => {
        let isActive = true; //vermijdt dat data wordt opgehaald als pagina niet meer bestaat

        fetch('./blogData.json') //http://localhost:3000/blog.json
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(isActive) {
                setBlogs(data); 
                setFilteredData(data);
            }
        })
        return () => isActive = false; //data wordt niet opgehaald als pagina niet meer bestaat
      }, [])


    useEffect(() => {
        if(blogs)filter1(); //filter1 zal pas uitgvoerd worden van als er een waarde uit blogs wordt meegegeven
    }, [formData])

    useEffect(() => {
        if(blogs)filter2();
    }, [formData])


    if(!filteredData) return (<Loading/>)
    else return (
        <div>
            <article className={style.app}>
                <label className={style.label} htmlFor="ftitle"> 
                    Titel of intro:
                    <input id="ftitle" name="ftitle" placeholder="Zoek titel of intro" type={"text"} value={formData} onChange={e => setFormdata(e.currentTarget.value)}/>
                </label>
                <div className={style.blogPost}>
                    {
                        filteredData.map((blog, index) => {
                            return (<Blog key={index} blogs={blog}/>) //array met blogs wordt doorgegeven aan Blog component
                        })
                    }
                </div>
            </article>
        </div>
    );
};

export default Home;
