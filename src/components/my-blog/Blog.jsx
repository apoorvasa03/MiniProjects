import {useState, useEffect} from 'react'
import axios from 'axios'
import './blog.css'

const Blog = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const getAll = async () => {    
            return Promise.all([getPosts(), getUsers()]).then(values => { 
                const posts = values[0];
                const users = values[1];
    
                for(let post of posts){
                    post.user = users.filter(user => user.id = post.userId)[0]
                }
                return posts
            })
        }

        getAll()
        .then(posts => {
            setPosts(posts)
        }).catch(err => {
            console.log(err)
        })
    }, [])


   

    const getPosts =  async () => {
        return new Promise((resolve, reject) => {
            axios('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                resolve(res.data)
            }).catch((err) => reject(err))
        })
    }

    const getUsers = async () => {
          let response = await axios('https://jsonplaceholder.typicode.com/users')
          return response.data
    }

    
    return (
        <div className="blog">
            <h2>My Blog</h2>
            <div className='title-underline'></div>
            <ul className='posts'>
            {posts?.map(post => (
                    <li key={post.id} className='post'>
                        <h4>{post.title}</h4>
                        <p>{post.user.username}</p>
                    </li>
                ))}
            </ul>
            
        </div>
    )
}

export default Blog