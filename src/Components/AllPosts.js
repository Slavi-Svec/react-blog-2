import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import sanityClient from '../client.js'

export default function AllPosts() {
  const [allPostsData, setAllPosts] = useState(null)

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == 'post']{
        title,
        slug,
        mainImage{  
          asset->{
          _id,
          url
        }
      }
    }`
      )
      .then((data) => setAllPosts(data))
      .catch(console.error)
  }, [])

  return (
    <div className="bg-green-100 min-h-screen p-12">
      <div>
        <h2>Blog Posts 2020</h2>  
        <h3>Welcome to my blog</h3>
        <div>
          {allPostsData &&
            allPostsData.map((post, index) => (
              <Link to={"/" + post.slug.current} key={post.slug.current}>
                <span key={index}>
                  <img src={post.mainImage.asset.url} alt="" />
                  <span>
                    <h2>{post.title}</h2>
                  </span>
                </span>
              </Link>
            ))}
        </div>
      </div>
    </div>
  )
}