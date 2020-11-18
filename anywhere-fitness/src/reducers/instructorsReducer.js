import { INST_CLASSES_LOADING, INST_CLASSES_SUCCESS, INST_CLASSES_ERROR } from '../actions'

const initialState = {
    isLoading: false,
    classesData: [],
    reservedClassesData: [],
    punchCardData: [],  
    errorMessage: ''
}

export const instructorsReducer = (state = initialState, action) => {
    switch (action.type) {
        default: 
            return state
    }
}