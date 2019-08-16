import React from 'react'
import Card from './Card'

class Sobre extends React.Component{
    render(){
        const content = this.props.about.content.map(cnt => {
                return( 
                    <p key={cnt}>{cnt}</p>
                )
        })

        const Cards = this.props.about.Cards.map((abt,index) =>{
                return(
                    <Card key={index}
                          title={abt.text}
                          img={abt.img}
                          text={abt.text}
                     />
                )
        })

        return(
                <section className="sobre">
                    <div className="container">
                        <div className="row" data-aos="fade-up">
                            <div className="col-md-5">
                                <img className="img-width" src={this.props.about.image1} alt="Concore" />
                            </div>
                            <div className="col-md-7">
                                {this.props.about.title}
                                <img className="divider1" src={this.props.about.image2} alt="Gradient divider" />
                                {content}
                            </div>
                            <div className="col-md-12 text-center" data-aos="fade-down">
                                <h2 className="title-d">
                                    {this.props.about.adText}
                                </h2>
                                <img className="divider2" src={this.props.about.image2} alt="Gradient divider" />
                            </div>
                            {Cards}
                        </div>
                    </div>
                </section>
                )
    }
}

export default Sobre