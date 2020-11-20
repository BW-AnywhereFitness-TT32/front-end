import { axiosWithAuth } from '../utils/axiosWithAuth'

export const CLIENTS_CLASSES_LOADING = 'CLIENTS_CLASSES_LOADING'
export const CLIENTS_CLASSES_SUCCESS = 'CLIENTS_CLASSES_SUCCESS'
export const CLIENTS_CLASSES_ERROR = 'CLIENTS_CLASSES_ERROR'

export const CLIENTS_RES_CLASSES_SUCCESS = 'CLIENTS_RES_CLASSES_SUCCESS'
export const CURRENT_CLIENT_SUCCESS = 'CURRENT_CLIENT_SUCCESS'

export const TOGGLE_FETCHING = 'TOGGLE_FETCHING'

export const PUNCHCARD_SUCCESS = 'PUNCHCARD_SUCCESS'

export const INST_CLASSES_LOADING = 'INST_CLASSES_LOADING'
export const INST_CLASSES_SUCCESS = 'INST_CLASSES_SUCCESS'
export const INST_CLASSES_ERROR = 'INST_CLASSES_ERROR'
export const DELETE_CLASS = 'DELETE_CLASS'

export const FETCH_ALL_USERS = 'FETCH_ALL_USERS'
export const GENERATE_ALL_PUNCHCARDS = 'GENERATE_ALL_PUNCHCARDS'


export const fetchClientsClasses = () => {
    return(dispatch) => {
        dispatch({ type: CLIENTS_CLASSES_LOADING })
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


export const fetchFilteredClasses = (filter) => {
    return(dispatch) => {
        dispatch({ type: CLIENTS_CLASSES_LOADING })
        axiosWithAuth()
            .get(`/classes?${filter}`)
            .then(res => {
                // console.log('inside filtering response', res.data)
                dispatch({ type: CLIENTS_CLASSES_SUCCESS, payload: res.data })
                dispatch({ type: TOGGLE_FETCHING, payload: false })
            })
            .catch(err => {
                console.log(err)
                dispatch({ type: CLIENTS_CLASSES_ERROR, payload: err.message })
            })
    }
}


export const fetchCurrentClient = () => {
    return(dispatch) => {
        dispatch({ type: CLIENTS_CLASSES_LOADING })
        axiosWithAuth()
            .get('/users/current')
            .then(res => {
                const clientId = res.data.user_id
                axiosWithAuth()
                    .get(`/users/${clientId}`)
                    .then(res => {
                        // console.log('new client info: ', res.data)
                        dispatch({ type: CURRENT_CLIENT_SUCCESS, payload: res.data })
                        // dispatch({ type: TOGGLE_FETCHING, payload: false })
                    })
                    .catch(err => {
                        dispatch({ type: CLIENTS_CLASSES_ERROR, payload: err.message })
                    })
                axiosWithAuth()
                    .get(`/users/${clientId}/punchcards`)
                    .then(res => {
                        // console.log('client punchcards: ', res.data)
                        dispatch({ type: PUNCHCARD_SUCCESS, payload: res.data})
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


export const deleteClass = id => {
    return(dispatch) => {
        axiosWithAuth() 
            .delete(`/classes/${id}`)
            .then(res => {
                console.log(res.data)
                axiosWithAuth()
                    .get('/classes')
                    .then(res => {
                        dispatch({ type: CLIENTS_CLASSES_SUCCESS, payload: res.data })
                        dispatch({ type: TOGGLE_FETCHING, payload: false })
                    })
                    .catch(err => {
                        dispatch({ type: CLIENTS_CLASSES_ERROR, payload: err.message })
                    })
            })
            .catch(err => {
                console.log(err)
            })
    }
}

export const fetchAllUsers = () => {
    return(dispatch) => {
        axiosWithAuth()
            .get('https://anywhere-fitness-tt32.herokuapp.com/api/users')
            .then(res => {
                // console.log(res.data)
                dispatch({ type: FETCH_ALL_USERS, payload: res.data })
                dispatch({ type: TOGGLE_FETCHING, payload: false })
            })
            .catch(err => {
                console.log(err)
            })
    }
}

export const generateAllPunchcards = (singleUser) => {
    return(dispatch) => {
        axiosWithAuth()
            .get(`/users/${singleUser.id}/punchcards`)
            .then(res => {
                if (res.data.length > 0) {
                    // console.log(`Res.data for ${singleUser.username} ${res.data[0].classes_attended}`)  
                    dispatch({ type: GENERATE_ALL_PUNCHCARDS, payload: {username: singleUser.username, punchData: res.data}})                  
                } else {
                    console.log(`${singleUser.username} doesn't have any punchcards`)
                }
            })
            .catch(err => {
                console.log(err)
            })
    }
}

