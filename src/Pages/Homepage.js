import React from 'react'
import AOS from 'aos'
import Banner from '../components/Banner'
import Sobre from '../components/Sobre'
import Solutions from '../components/Solutions'

class Homepage extends React.Component{

    componentDidMount() {
        AOS.init({
            duration: 2000
        })
    }

    render(){
        return(
            <div>
                <Banner banner={this.props.data.banner}/>
                <Sobre about={this.props.data.about} />
                <Solutions solutions={this.props.data.solutions} />
            </div>
        )
    }
}

export default Homepage