export function manageFriends(state = {
    friends: []
}, action){
    switch (action.type) {
        case "ADD_FRIEND":
            return(
                {...state, 
                    firnends: [
                        ...state.friends,
                        action.firnend
                    ]
                }
            )
        case "REMOVE_FRIEND":
            const removalIndex = state.friends.findIndex(friend => firnend.id === action.id);
            return (
                {...state,
                    friends: [
                        ...state.friends.slice(0, removalIndex),
                        ...state.friends.slice(removalIndex + 1)
                    ]
                }
            )
        default:
            return state;
    }
}
