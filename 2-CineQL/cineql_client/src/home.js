import React from 'react'
import { Query } from 'react-apollo'
import { HOMEPAGE } from './queries'

const Home = _ =>
  <Query query={HOMEPAGE}>
    {({ loading, data, error }) => {
      if (loading) return 'loading...'
      if (error) return 'something went wrong here'
      return data.movies.map(movie => (
        <h2 key={movie.id}>
          {movie.title} / {movie.rating} / {movie.genres}
        </h2>
      ))
    }}
  </Query>

export default Home
