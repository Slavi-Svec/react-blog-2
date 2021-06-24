import sanityClient from '@sanity/client'

export default sanityClient({
  projectId: 'r71yiycy',
  dataset: 'production',
  useCdn: true
})
