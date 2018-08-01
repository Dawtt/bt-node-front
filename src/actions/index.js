export const INCREMENT = 'INCREMENT'
export const CREATE_NODE = 'CREATE_NODE'
export const DELETE_NODE = 'DELETE_NODE'
export const ADD_CHILD = 'ADD_CHILD'
export const REMOVE_CHILD = 'REMOVE_CHILD'

export const POPULATE_ARTISTS = 'POPULATE_ARTISTS'
export const CREATE_ARTIST_LIST = 'CREATE_ARTIST_LIST'


export const populateArtists = () => ({
    type: POPULATE_ARTISTS,

})
let nextArtistListId = 0
export const createArtistList = () => ({
    type: CREATE_ARTIST_LIST,
    artistListId: nextArtistListId++
})



export const increment = (nodeId) => ({
    type: INCREMENT,
    nodeId
})

let nextId = 0
export const createNode = () => ({
    type: CREATE_NODE,
    nodeId: `new_${nextId++}`
})

export const deleteNode = (nodeId) => ({
    type: DELETE_NODE,
    nodeId
})

export const addChild = (nodeId, childId) => ({
    type: ADD_CHILD,
    nodeId,
    childId
})

export const removeChild = (nodeId, childId) => ({
    type: REMOVE_CHILD,
    nodeId,
    childId
})

//  TODO TUTORIAL EXAMPLES
let nextTodoId = 0
export const addTodo = (text) => ({
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
})

export const setVisibilityFilter = (filter) => ({
    type: 'SET_VISIBILITY_FILTER',
    filter
})

export const toggleTodo = (id) => ({
    type: 'TOGGLE_TODO',
    id
})
