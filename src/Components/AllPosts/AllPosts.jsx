import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import sanityClient from '../../client.js'
import Image from '../Image/Image'
import ProfessorLogo from '../Images/proflogo.png'
import ProfessorIcon from '../Images/prof.png'
import './style.scss'

const AllPosts = () => {
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
      .then(data => setAllPosts(data))
      .catch(console.error)
  }, [])

  return (
    <div className="allPosts__background">
      <div className="allPosts__container">
        <div className="allPosts__icon-container">
          <Image className="allPosts__Professor-logo" src={ProfessorLogo} />
        </div>
        <div className="allPosts__image-container">
          <Image className="allPosts__Professor-Icon" src={ProfessorIcon} />
          <div className="allPosts__Professor-board">
            <ul>
              <li>Habits</li>
              <li>Productivity</li>
              <li>Frugalism</li>
            </ul>
          </div>
        </div>
        {/* <h2 className="allPosts__blog-title">2021</h2> */}
        <h3 className="allPosts__blog-second-title">Welcome to my blog</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allPostsData &&
            allPostsData.map((post, index) => (
              <Link to={'/' + post.slug.current} key={post.slug.current}>
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
