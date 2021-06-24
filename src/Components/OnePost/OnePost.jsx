import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import sanityClient from "../../client.js"
import BlockContent from "@sanity/block-content-to-react"
import imageUrlBuilder from "@sanity/image-url"
import './style.scss'

const builder = imageUrlBuilder(sanityClient)
function urlFor(source) {
  return builder.image(source)
}

const  OnePost = () => {
  const [postData, setPostData] = useState(null)
  const { slug } = useParams()

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == "${slug}"]{
           title,
           slug,
           mainImage{
           asset->{
              _id,
              url
            }
          },
          body,
          "name": author->name,
          "authorImage": author->image
       }`
      )
      .then((data) => setPostData(data[0]))
      .catch(console.error)
  }, [slug])

  if (!postData) return <div>Loading...</div>

  return (
    <section className="onePost">
      <div className="onePost__background">
        <div className="onePost__container">
          <div className="onePost__main-image-container">
            <div className="onePost__image">
              {/* Title Section */}
              <div className="onePost__title-container">
                <h2 className="cursive text-4xl lg:text-6xl mb-4 text-center">
                  {postData.title}
                </h2>
                <div className="onePost__title-container-author">
                  <img
                    src={urlFor(postData.authorImage).url()}
                    className="onePost__title-container-author-image"
                    alt="Author is Slavi"
                  />
                  <h3 className="onePost__title-container-author-text">
                    {postData.name}
                  </h3>
                </div>
              </div>
            </div>
            <img
              className="onePost__backing-image"
              src={urlFor(postData.mainImage).url()}
              alt=""
            />
          </div>
          <div className="px-16 lg:px-48 py-12 lg:py-20 prose lg:prose-xl max-w-full">
            <BlockContent
              blocks={postData.body}
              projectId={sanityClient.clientConfig.projectId}
              dataset={sanityClient.clientConfig.dataset}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default OnePost