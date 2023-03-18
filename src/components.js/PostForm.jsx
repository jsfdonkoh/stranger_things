import React, { useState } from "react";


 export const PostForm = () => {
    const [title, setTitle] = useState ('');
    const [description, setDescription] = useState ('');
    const [price, setPrice] = useState('');
    const [willDeliver, setWillDeliver] =useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`Tile: ${title}`);
        console.log(`Description: ${description}`);
        console.log(`Price: ${price}`);
        console.log(`WillDeliver: ${willDeliver}`);
        
      };

      return(
         
        <form onSubmit={handleSubmit}>
             <h3> PostForm</h3>
            <div>
            <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
            </div>
            <div>
            <label htmlFor="description">Description</label>
            <input
            type="text"
            id="description"
            value={description}
            onChange= {(e) => setDescription(e.target.value)}
            />
            </div>
            <div>
                <label htmlFor="price">Price</label>
                <input
                type="text"
                id="price"
                value={price}
                onChange = {(e) => setPrice(e.target.value)}
                />
                </div>
                <div>
                    <label htmlFor="willDeliver">willDeliver</label>
                    <input
                    type="text"
                    id="willDeliver"
                    value={willDeliver}
                    onChange = {(e) => setWillDeliver(e.target.value)}
                    />
                </div>
                <button type="submit">Submit</button>
        </form>
      );
 }

    export const makePost = async (POST_ID, BASE_URL, TOKEN_STRING_HERE) => {

        try {
          const response = await fetch(`${BASE_URL}/posts`, {
            method: "POST",
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${TOKEN_STRING_HERE}`
            },
            body: JSON.stringify({
              post: {
                title: "My favorite stuffed animal",
                description: "This is a pooh doll from 1973. It has been carefully taken care of since I first got it.",
                price: "$480.00",
                willDeliver: true
              }
            })
          });
          const result = await response.json();
          console.log(result);
          return result
        } catch (err) {
          console.error(err);
        }
      }

      export const updatePost = async (BASE_URL, TOKEN_STRING_HERE) => {
        try {
          // You will need to insert a variable into the fetch template literal 
          // in order to make the POST_ID dynamic. 
          // 5e8d1bd48829fb0017d2233b is just for demonstration.
          const response = await fetch(`${BASE_URL}/posts/5e8d1bd48829fb0017d2233b`, {
            method: "PATCH",
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${TOKEN_STRING_HERE}`
            },
            body: JSON.stringify({
              post: {
                title: "My favorite stuffed animal",
                description: "This is a pooh doll from 1973. It has been carefully taken care of since I first got it.",
                price: "$480.00",
                location: "New York, NY",
                willDeliver: true
              }
            })
          });
          const result = await response.json();
          console.log(result);
          return result
        } catch (err) {
          console.error(err);
        }
      }
      
      export const deletePost = async (BASE_URL, TOKEN_STRING_HERE) => {
        try {
          const response = await fetch(`${BASE_URL}/posts/5e8d1bd48829fb0017d2233b`, {
            method: "DELETE",
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${TOKEN_STRING_HERE}`
            }
          });
          const result = await response.json();
          console.log(result);
          return result
        } catch (err) {
          console.error(err);
        }
      }
    
 export default PostForm