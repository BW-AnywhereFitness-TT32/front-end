import { CLASSES_LOADING, CLASSES_SUCCESS, CLASSES_ERROR } from '../actions/coursesActions'

const initialState = {
    isLoading: false,
    classesData: [],
    errorMessage: ''
}

export const coursesReducer = (state = initialState, action) => {
    switch(action.type) {
        case CLASSES_LOADING:
            return {
                ...state, 
                isLoading: true,
                errorMessage: ''
            }
        case CLASSES_SUCCESS:
            return {
                ...state,
                classesData: action.payload,
                isLoading: false,
                errorMessage: ''
            }
        case CLASSES_ERROR:
            return {
                ...state, 
                isLoading: false,
                errorMessage: action.payload
            }
        default:
            return state
    }
}