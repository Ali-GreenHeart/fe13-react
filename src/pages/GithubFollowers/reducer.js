import { v4 } from 'uuid'

export const _actions = {
    get_followers: 0,
    delete_follower: 1,
    edit_follower: 2,
    add_follower: 3
}

export const githubFollowersReducer = (state, { type, payload }) => {
    switch (type) {
        case _actions.get_followers:
            return payload;
        case _actions.delete_follower:
            return state.filter((follower) => follower.id !== payload)
        case _actions.edit_follower:
            return state.map((follower) => {
                if (follower.id === payload.id) {
                    return { ...follower, login: prompt('enter new name: ', follower.login) }
                }
                return follower;
            })
        case _actions.add_follower:
            return state.concat({
                id: v4(),
                login: prompt('enter follower name'),
                html_url: prompt('enter follower github url'),
                avatar_url: prompt("enter follower image")
            })
        default:
            throw new Error("ay qa, action adini sehv yazmisan!")
    }
}
