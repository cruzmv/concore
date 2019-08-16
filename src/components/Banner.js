import React from 'react'

class Banner extends React.Component{
    render(){
        return(
                <section className="banner">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                {this.props.banner.title}
                                {this.props.banner.description}
                                <div className="link-scroll">
                                    <a href="javascript" className="scrolldown hvr-wobble-vertical">
                                        <i className="fas fa-chevron-down"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                )
    }
}

export default Banner