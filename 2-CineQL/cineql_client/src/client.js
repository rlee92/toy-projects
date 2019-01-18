import ApolloCient from "apollo-boost"

const client = new ApolloCient({
  // Deploy required if I want to use my own
  uri: "https://movieql.now.sh/"
})

export default client
