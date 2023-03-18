import React, {useEffect, useState} from 'react'; 
import {Header, Posts, Footer, PostForm, Search, Navbar} from './components.js'
import './App.css';

// export const token = ``

function App() {
  const [token, setToken] = useState('')
  const [posts, setPosts,] = useState([])
  useEffect (() => {
    const savedToken = localStorage.getItem('token')
    if(savedToken) {
      setToken(savedToken)
}
    async function fetchPosts () {
      try {
        const resp = await fetch ('https://strangers-things.herokuapp.com/api/2211-FTB-ET-WEB-PT/posts')
        // const {data: {posts}} = await resp.json()
        let result = await resp.json()
        console.log ("data", posts)
        setPosts(result.data.posts)
    } catch (error) {
      console.log (error);
    }
  }

    fetchPosts ()
  
    }, []
  
    )

    // const savedToken = localStorage.getItem ('token')
  return (
    <div className="Buttons">
      <button className="home">
        HOME
      </button>
      <button className="posts">
        POSTS
      </button>
      <button className ="Profile">
        PROFILE
      </button>  
      <button className = "LOG OUT">
        LOG OUT
      </button>
        <div className="container">
          <Header /> 
          <Navbar />
          <div className="row">
            <div className="col">
              <main>
                <Posts posts = {posts}/>
      
                <Search />
              </main>
            </div>
            < aside className= "col">
              <PostForm />
            </aside>
          </div>
          <footer>
            <Footer />
          </footer>
        </div>
    </div>
    
  );
}

export default App;
