const Counter = ({title = "Sin titulo", value = 0, changeValue}) => {

    return (
        <div>
            <div>
                {title}
            </div>
            <div>
                <button disabled={value === 0} onClick={() => changeValue(value - 1)}>-</button>
                {value}
                <button onClick={() => changeValue(value + 1)}>+</button>
            </div>
        </div>

    )
}

export default Counter