import React from 'react'
import $ from 'jquery'

class Banner extends React.Component{
    handleClick(e){
        $('html, body').animate({scrollTop: $('.sobre').offset().top }, 'slow');
        e.preventDefault()
    }

    render(){
        return(
                <section className="banner">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                {this.props.banner.title}
                                {this.props.banner.description}
                                <div className="link-scroll">
                                    <a href="javscript:void(0)" onClick={(e) => this.handleClick(e)} className="scrolldown hvr-wobble-vertical">
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