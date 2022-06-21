const Counter = ({title = "Sin titulo", value = 0}) => {

    return (
        <div>
            <div>
                {title}
            </div>
            <div>
                <button>-</button>
                {value}
                <button>+</button>
            </div>
        </div>

    )
}

export default Counter