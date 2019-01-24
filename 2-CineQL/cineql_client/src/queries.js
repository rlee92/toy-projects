import gql from 'graphql-tag'

export const HOMEPAGE = gql`
  {
    movies(limit: 50, rating: 8) {
      title
      rating
      genres
      medium_cover_image
    }
  }
`

export const MOVIE_DETAILS = gql`
  query getMovieDetails($movieId: Int!) {
    movie(id: $movieId) {
      medium_cover_image
      title
      rating
      description_intro
      language
      genres
    }
    suggestions(id: $movieId) {
      medium_cover_image
      title
      rating
    }
  }
`
