import { CLIENTS_CLASSES_LOADING, CLIENTS_CLASSES_SUCCESS, CLIENTS_RES_CLASSES_SUCCESS, CURRENT_CLIENT_SUCCESS, CLIENTS_CLASSES_ERROR, TOGGLE_FETCHING, PUNCHCARD_SUCCESS } from '../actions'

const initialState = {
    isLoading: false,
    isFetching: false,
    classesData: [],
    userData: {
        classes: [],
        email: "",
        id: '',
        password: "$2a$08$YV/uYlP36ejGHkXW8OulPuBc5/5jzgu0RW9S8p9hh12QMRCtM91F2",
        role_id: '',
        username: "test"
    },
    punchcardData: [],  
    errorMessage: ''
}

export const clientsReducer = (state = initialState, action) => {
    switch(action.type) {
        case CLIENTS_CLASSES_LOADING:
            return {
                ...state, 
                isLoading: true,
                errorMessage: ''
            }
        case CLIENTS_CLASSES_SUCCESS:
            return {
                ...state,
                classesData: action.payload,
                isLoading: false,
                errorMessage: ''
            }
        case CLIENTS_RES_CLASSES_SUCCESS:
            return {
                ...state,
                isLoading: false,
                errorMessage: ''
            }
        case CURRENT_CLIENT_SUCCESS: 
            return {
                ...state, 
                userData: action.payload,
                isLoading: false,
                errorMessage: ''
            }
        case CLIENTS_CLASSES_ERROR:
            return {
                ...state, 
                isLoading: false,
                errorMessage: action.payload
            }
        case TOGGLE_FETCHING:
            return {
                ...state, 
                isFetching: action.payload
            }
        case PUNCHCARD_SUCCESS:
            return {
                ...state, 
                punchcardData: action.payload
            }
        default:
            return state
    }
}