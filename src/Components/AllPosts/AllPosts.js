import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import sanityClient from '../../client.js'
import './style.scss'

 const  AllPosts = () => {
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
    <div className="allPosts__background">
      <div className="allPosts__container">
        <h2 className="allPosts__blog-title">Blog Posts 2020</h2>
        <h3 class="allPosts__blog-second-title">
          Welcome to my blog
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allPostsData &&
            allPostsData.map((post, index) => (
              <Link to={"/" + post.slug.current} key={post.slug.current}>
                <span className="allPosts__blog-container" key={index}>
                  <img
                    className="allPosts__blog-container-sizes"
                    src={post.mainImage.asset.url}
                    alt=""
                  />
                  <span className="block relative h-full flex justify-end items-end pr-4 pb-4">
                    <h2 className="allPosts__blog-container-text">
                      {post.title}
                    </h2>
                  </span>
                </span>
              </Link>
            ))}
        </div>
      </div>
    </div>
  )
}

export default AllPosts