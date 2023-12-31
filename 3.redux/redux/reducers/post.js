const { produce } = require('immer')

const initialState = []

const ADD_POST = 'ADD_POST'

const postReducer = (prevState = initialState, action) => {
  return produce(prevState, draft => {
    switch (action.type) {
      case ADD_POST:
        draft.push(action.data)
        break
      default:
        break
    }
  })
}

module.exports = postReducer
