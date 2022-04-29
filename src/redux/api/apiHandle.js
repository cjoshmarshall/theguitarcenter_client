import axios from "axios";

// const BASE_URL="http://localhost:3006/api"
const BASE_URL="https://theguitarcenter.herokuapp.com/api"
const TOKEN="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNjE4ZTVmYzRiZDZkOTc4MWYyY2E5NSIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NTExMzEyODUsImV4cCI6MTY1MTM5MDQ4NX0.3swnk-FzEHfXDct1Kut9HQZdKL_-wI-hOzA2DRg6wU8"

export const publicRequest=axios.create({
    baseURL:BASE_URL
})

export const userRequest=axios.create({
    baseURL:BASE_URL,
    headers:{token:`Bearer ${TOKEN}`}
})