import gql from 'graphql-tag'

export const HOMEPAGE = gql`
  {
    movies(limit: 50, rating: 8) {
      title
      rating
      genres
    }
  }
`
