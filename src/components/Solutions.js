import React from 'react'

class Solutions extends React.Component{
    render(){
        const blocks = this.props.solutions.items.map((item,index) =>{
            return(
                <a key={index} href={item.link}>
                    <div className={"bg-"+item.id} data-aos="fade-left">
                        <div className="row">
                            <div className="col-md-5 text-center">
                                <div className="img-solucoes">
                                    <img src={item.img} alt={item.alt} />
                                </div>
                            </div>
                            <div className="col-md-7">
                                <h3>{item.text}</h3>
                                <div className="link-area">
                                    <span className="a-style hvr-wobble-vertical">Saiba mais</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            )
        })

        const carousel = this.props.solutions.carousel.map((item,index) => {
            return(
                <div key={index} className={"carousel-item "+(item.active ? "active" : "") }>
                    <div className="row">
                        <div className="col-md-6">
                            <img src={item.img} alt={item.alt} />
                        </div>
                        <div className="col-md-6">
                            {item.title}
                            {item.subTitle}
                            {item.text}
                        </div>
                    </div>
                </div>
            )
        })
        
        return(
                <section className="solucoes">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center" data-aos="fade-up">
                                {this.props.solutions.title}
                                <img className="divider2" src={this.props.solutions.img1} alt="Gradient divider" />
                            </div>
                            <div className="col-md-12">
                                {blocks}
                            </div>
                        </div>
                    </div>
                    <div className="slider-concore" data-aos="fade-up">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12 text-center">
                                    {this.props.solutions.titleSlide}
                                    <img className="divider2" src={this.props.solutions.img1} alt="Gradient divider" />
                                </div>
                                <div className="col-md-12">
                                    <div id="carouselConcore" className="carousel slide" data-ride="carousel" data-interval="10000">
                                        <div className="carousel-inner">
                                            {carousel}
                                        </div>
                                        <a className="carousel-control-prev car-control" href="#carouselConcore" role="button" data-slide="prev">
                                            <i className="fas fa-chevron-left"></i>
                                        </a>
                                        <a className="carousel-control-next car-control" href="#carouselConcore" role="button" data-slide="next">
                                            <i className="fas fa-chevron-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
        )
    }
}

export default Solutions