import React,  {useEffect, useState} from "react";


export default function Posts() {
    const [posts, getPosts] = useState('');
    // useEffect(() => {
    //     makePost()
    //         .then(results => {
    //             setPosts(results)
    //             console.log(results)
    //         }).catch(error => console.error(error))
    // }, [])
    

useEffect (() => {
    async function getPosts() {
        try {
            const response = await fetch('https://strangers-things.herokuapp.com/api/2211-FTB-ET-WEB-PT/posts')
            let result = await response.json()
            getPosts(result.data.posts)

        } catch(err) {
            console.log(err)
        }
    }

    getPosts()

},[])
function postMatches(post,props){
    // return true if any of the fields you want to check against include the text
    // strings have an .includes() method
return posts.map(post => {
    return(
        <div key={post._id} className="card">
            <div>{post.title}</div>
            <div>{post.description}</div>
            <div>{post.price}</div>
        </div>
    )
})
}
}




