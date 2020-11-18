import { axiosWithAuth } from '../utils/axiosWithAuth'

export const CLIENTS_CLASSES_LOADING = 'CLIENTS_CLASSES_LOADING'
export const CLIENTS_CLASSES_SUCCESS = 'CLIENTS_CLASSES_SUCCESS'
export const CLIENTS_CLASSES_ERROR = 'CLIENTS_CLASSES_ERROR'

export const CLIENTS_RES_CLASSES_SUCCESS = 'CLIENTS_RES_CLASSES_SUCCESS'
export const CURRENT_CLIENT_SUCCESS = 'CURRENT_CLIENT_SUCCESS'

export const TOGGLE_FETCHING = 'TOGGLE_FETCHING'

export const INST_CLASSES_LOADING = 'INST_CLASSES_LOADING'
export const INST_CLASSES_SUCCESS = 'INST_CLASSES_SUCCESS'
export const INST_CLASSES_ERROR = 'INST_CLASSES_ERROR'

export const fetchClientsClasses = () => {
    return(dispatch) => {
        dispatch({ type: CLIENTS_CLASSES_LOADING })
        console.log('classes are being fetched')
        axiosWithAuth()
            .get('/classes')
            .then(res => {
                dispatch({ type: CLIENTS_CLASSES_SUCCESS, payload: res.data })
            })
            .catch(err => {
                dispatch({ type: CLIENTS_CLASSES_ERROR, payload: err.message })
            })
    }
}

export const fetchCurrentClient = () => {
    return(dispatch) => {
        dispatch({ type: CLIENTS_CLASSES_LOADING })
        console.log('client info is being fetched')
        axiosWithAuth()
            .get('/users/current')
            .then(res => {
                const clientId = res.data.user_id
                axiosWithAuth()
                    .get(`/users/${clientId}`)
                    .then(res => {
                        console.log('new client info: ', res.data)
                        dispatch({ type: CURRENT_CLIENT_SUCCESS, payload: res.data })
                        dispatch({ type: TOGGLE_FETCHING, payload: false })
                    })
                    .catch(err => {
                        dispatch({ type: CLIENTS_CLASSES_ERROR, payload: err.message })
                    })
            })
            .catch(err => {
                dispatch({ type: CLIENTS_CLASSES_ERROR, payload: err.message })
            })
    }
}


export const toggleReserveClientsClasses = singleClass => {
    console.log('user is toggling attendance')
    return(dispatch) => {
        dispatch({ type: CLIENTS_CLASSES_LOADING })
        axiosWithAuth()
            .post(`/classes/${singleClass.id}/joinleave`)
            .then(res => {
                console.log('Success Reserving! ', res.data)
            })
            .catch(err => {
                console.log(err)
                dispatch({ type: CLIENTS_CLASSES_ERROR, payload: err.message })
            })
    }
}

export const toggleFetching = (fetch) => {
    return(dispatch) => {
        dispatch({ type: TOGGLE_FETCHING, payload: fetch })
    }
}
