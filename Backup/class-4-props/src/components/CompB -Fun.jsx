let CompB = (props) => {
    return <div>
        <h2>Component B</h2>
        <pre>{JSON.stringify(props)}</pre>

        <h1>Employee Id:{props.id}</h1>
        <h1>Employee Name:{props.name}</h1>

    </div>
}

export default CompB