import React from "react"
import PlaceList from "../components/PlaceList"

import { useParams } from "react-router-dom"

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Empire States Building",
    description: "One of the most famous buildings in the world!",
    address: "20 W 34th St., New York, NY 10001",
    imageUrl:
      "https://lh5.googleusercontent.com/p/AF1QipNVlM5lo7fIJrmvjN4EOrTMiQjDgDyTfw7ATdV6=w408-h272-k-no",
    location: {
      lat: 40.748517695102386,
      lng: -73.98566976652174,
    },
    creator: "u1",
  },
  {
    id: "p2",
    title: "Empire States Building",
    description: "One of the most famous buildings in the world!",
    address: "20 W 34th St., New York, NY 10001",
    imageUrl:
      "https://lh5.googleusercontent.com/p/AF1QipNVlM5lo7fIJrmvjN4EOrTMiQjDgDyTfw7ATdV6=w408-h272-k-no",
    location: {
      lat: 40.748517695102386,
      lng: -73.98566976652174,
    },
    creator: "u2",
  },
]

const UserPlaces = (props) => {
  const userId = useParams().userId
  const loadedPlaces = DUMMY_PLACES.filter((place) => place.creator === userId)
  return <PlaceList items={loadedPlaces} />
}

export default UserPlaces
