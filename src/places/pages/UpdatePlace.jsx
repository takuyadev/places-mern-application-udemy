import React, { useEffect } from "react"
import { useParams } from "react-router-dom"

import Button from "../../shared/components/FormElements/Button"
import Input from "../../shared/components/FormElements/Input"
import Card from "../../shared/components/UIElements/Card"
import "./PlaceForm.css"

import { useForm } from "../../shared/hooks/form-hook"
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../shared/util/validators"

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

const UpdatePlace = (props) => {
  const placeId = useParams().placeId

  const [formState, inputHandler, setFormData] = useForm(
    {
      title: {
        value: "",
        isValid: false,
      },
      description: {
        value: "",
        isValid: false,
      },
    },
    false
  )

  const identifiedPlace = DUMMY_PLACES.find((p) => p.id === placeId)

  const placeUpdateSubmitHandler = (event) => {
    event.preventDefault()
  }
  useEffect(() => {
    if (identifiedPlace) {
      setFormData({
        title: {
          value: identifiedPlace.title,
          isValid: true,
        },
        description: {
          value: identifiedPlace.description,
          isValid: true,
        },
      })
    }
  }, [])

  if (!identifiedPlace) {
    return (
      <Card>
        <div className="center">
          <h2>Could not find place!</h2>
        </div>
      </Card>
    )
  }

  if (!formState.inputs.title.value) {
    return (
      <div className="center">
        <h2>Loading...</h2>
      </div>
    )
  }
  return (
    <form className="place-form" onSubmit={placeUpdateSubmitHandler}>
      <Input
        id="Title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title."
        onInput={inputHandler}
        initialValue={formState.inputs.title.value}
        initialValid={formState.inputs.title.isValid}
      />
      <Input
        id="description"
        element="textarea"
        label="Description"
        errorText="Please enter a valid description. (min. 5 characters)"
        validators={[VALIDATOR_MINLENGTH(5)]}
        onInput={inputHandler}
        initialValue={formState.inputs.description.value}
        initialValid={formState.inputs.description.isValid}
      />
      <Button type="submit" disabled={!formState.isValid}>
        UPDATE PLACE
      </Button>
    </form>
  )
}

export default UpdatePlace
