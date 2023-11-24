//index.test.js

import axios from "axios"

import getSingleTodoTitle from "./../pages/advImplementation"

test("gets the uppercased title of the todo", async () => {
  let fakeResponse = {
    data: {
      userId: 1,
      id: 1,
      title: "Make me Uppercase",
      completed: false,
    },
  }
  axios.get = jest
    .fn()
    .mockImplementationOnce(() => Promise.resolve(fakeResponse))

  let todoTitle = await getSingleTodoTitle() //now jest will use the mock instead of actual API call
  expect(todoTitle).toBe("MAKE ME UPPERCASE")
})