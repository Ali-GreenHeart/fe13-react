const Follower = ({ follower, styles, dispatch }) => {
    return (
        <div className={styles.container} key={follower.id}>
            <img src={follower.avatar_url} alt="" />
            <a target="_blank" href={follower.html_url}> {follower.login} </a>
            <button
                onClick={() => {
                    dispatch({ type: _actions.delete_follower, payload: follower.id })
                }}
            >delete user</button>
            <button
                onClick={() => {
                    dispatch({ type: _actions.edit_follower, payload: follower })
                }}
            >edit user</button>
        </div>
    )
}
export default Follower
