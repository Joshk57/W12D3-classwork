import csrfFetch from './csrf'


export const SET_BENCHES = 'benches/setBenches'
export const ADD_BENCH = 'benches/addBench'


const setBenches = (benches) => {
    return {
        type: SET_BENCHES,
        benches
    }
}

const addBench = (bench) => {
    return {
        type: ADD_BENCH,
        bench
    }
}

export const getBenches = (state) => {
    if (state && state.benches) {
        return Object.values(state.benches)
    } else {
        return []
    }
}

export const getBench = (benchId) => (state) => {
    if (state && state.benches) {
        return state.benches[benchId]
    } else {
        return null
    }
}
export const fetchBenches = () => async (dispatch)=> {
    const response = await csrfFetch('api/benches')

    if (response.ok) {
        const benches = await response.json()
        dispatch(setBenches(benches))
    }
}

export const fetchBench = (benchId) => async (dispatch) => {
    const response = await csrfFetch(`api/benches/${benchId}`)

    if (response.ok) {
        const bench = await response.json()
        dispatch(addBench(bench))
        // console.log(bench)
    }
}

export const createBench = (bench) => async (dispatch) => {
    const response = await csrfFetch('api/benches', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(bench)
    })

    if (response.ok) {
        const bench = await response.json()
        console.log(bench)
    }

}

const benchesReducer = (state = {}, action) => {
    let newState = { ...state }
    switch (action.type) {
        case SET_BENCHES:
            return {...action.benches}
        case ADD_BENCH:
            return {...newState, [action.bench.id]: action.bench}
        default:
            return state
    }
}

export default benchesReducer