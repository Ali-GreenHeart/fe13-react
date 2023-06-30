function Button({ title, text }) {
    return (
        <button
            onClick={() => {
                console.log(text)
            }}
        >
            {title}
        </button>
    )
}
export default Button;
