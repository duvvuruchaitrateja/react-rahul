import React from 'react'
class Hero extends React.Component {
    hero_Name = "Rahul Gandhi"
    age = 40
    salary = 450000


    render() {
        return <div>
            <h1>Hero Name:{this.hero_Name}</h1>
            <h1> Age:{this.age}</h1>
            <h1>Salary:{this.salary}</h1>
        </div>
    }

}
export default Hero