import React from 'react'

class Card extends React.Component{
    render(){
        return(
                <div className="col-md-4 text-center" data-aos="fade-up">
                    <div className="box-df">
                        <div className="div-img">
                            <img src={this.props.img} alt={this.props.title} />
                        </div>
                        <hr className="hr-g" />
                        {this.props.text}
                    </div>
                </div>
        )
    }
}
export default Card