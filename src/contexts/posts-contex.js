import { createContext, useEffect, useState } from "react";
import { types } from "../consts";
import { getRndInteger } from "../utils";

export const PostsContex = createContext();

const PostsProvider = (props) => {
    const [ posts, setPosts ] = useState();
    const [ loading, setLoading ] = useState(false);
    const [ filtredPosts, setFiltredPosts] = useState();
    const [ paginatedPosts, setPaginatedPosts] = useState();
    const [ activePage, setActivePage ] = useState(1);

    useEffect(() => {
        setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => {
        if(res.ok) {
        return res.json();
        }
    })
    .then(data => {
        const postsArray = data.map(post => {
            return {
            ...post,
            data : new Date(`${getRndInteger(2000,2022)}-${getRndInteger(1,12)}-${getRndInteger(1,28)}`).toDateString(),
            likes: getRndInteger(0,100),
            types : types[getRndInteger(0,4)],
            times : getRndInteger(1,15),
            share : getRndInteger(0,100)
            }
        });
        setPosts(postsArray);
        setFiltredPosts(postsArray);
    })
    .finally(() => setLoading(false))
    },[])

    useEffect(()=>{
        if (filtredPosts){
            setPaginatedPosts(filtredPosts.slice((activePage-1) *10,activePage*10))
        }
    },[filtredPosts, activePage])

    if(loading) {
        return <p>Loading...</p>
    };
    
    return <PostsContex.Provider value={ { 
        posts, 
        setPosts, 
        filtredPosts, 
        setFiltredPosts, 
        paginatedPosts, 
        setPaginatedPosts ,
        activePage,
        setActivePage,
    } } {...props} />
}
export default PostsProvider;