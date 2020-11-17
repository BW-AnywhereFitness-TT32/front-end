import { axiosWithAuth } from '../utils/axiosWithAuth'

export const CLASSES_LOADING = 'CLASSES_LOADING'
export const CLASSES_SUCCESS = 'CLASSES_SUCCESS'
export const CLASSES_ERROR = 'CLASSES_ERROR'

export const fetchClasses = () => {
    return(dispatch) => {
        dispatch({ type: CLASSES_LOADING })
        console.log('classes are being fetched')
        axiosWithAuth()
            .get('/classes')
            .then(res => {
                console.log(res.data)
                dispatch({ type: CLASSES_SUCCESS, payload: res.data })
            })
            .catch(err => {
                dispatch({ type: CLASSES_ERROR, payload: err.message })
            })
    }
}

