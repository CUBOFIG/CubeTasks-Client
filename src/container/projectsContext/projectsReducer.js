import { FORM_PROJECT, GET_PROJECTS, ADD_PROJECT, ACTUAL_PROJECT, DELETE_PROJECT, PROJECT_ERROR } from 'types'

const ProyectoReducer = (state, action) => {
  switch (action.type) {
    case FORM_PROJECT:
      return {
        ...state,
        form: !action.payload
      }

    case GET_PROJECTS:
      return {
        ...state,
        projects: action.payload
      }

    case ADD_PROJECT:
      return {
        ...state,
        projects: [...state.projects, action.payload]
      }

    case ACTUAL_PROJECT:
      return {
        ...state,
        project: state.projects.filter((project) => project._id === action.payload)
      }

    case DELETE_PROJECT:
      return {
        ...state,
        projects: state.projects.filter((project) => project._id !== action.payload),
        project: null
      }
    case PROJECT_ERROR:
      return {
        ...state,
        message: action.payload
      }
    default:
      return state;
  }
}

export default ProyectoReducer;
