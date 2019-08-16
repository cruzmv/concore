import React from 'react'

class Footer extends React.Component{
    constructor(){
        super()
        this.state = {
            name: "",
            email: ""
        }
    }

    validate(){
        var regex = new RegExp(/^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
        return this.state.name.trim().length>3 &&
               this.state.email.trim().length>5 &&
               regex.test(this.state.email.trim().toLowerCase())
    }

    onSubmit(e) {
        if( this.validate() ){
            const input = this.state;
            fetch("https://flowcore.concore.io/rh/test/react1", {
                method: 'POST',
                body: JSON.stringify(input),
                headers:{
                    'Content-Type': 'application/json'
                }
            }).then(res => res.json())
            .then(response => window.alert('Success: ' + JSON.stringify(response)) )
            .catch(error => window.alert('Error: '+ error))
            this.setState({name : "", email : ""})
        } else{
            window.alert("Please fill out this fields")
        }
        e.preventDefault()
    }

    render(){
        return(
                <footer>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3 text-center">
                                <img src="https://i.ibb.co/TwmbBYF/logo-footer.png" alt="Logo Concore" />
                                <ul>
                                    <li>
                                        <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/concore.io/" >
                                            <img src="https://i.ibb.co/jr84Tb7/facebook.png" alt="Facebook Concore" />
                                        </a>
                                    </li>
                                    <li>
                                        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/company/concore.io/" >
                                            <img src="https://i.ibb.co/FbXYT8S/linkedin.png" alt="Linkedin Concore" />
                                        </a>
                                    </li>
                                    <li>
                                        <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/concore.oficial/" >
                                            <img src="https://i.ibb.co/hdV4yHx/instagram.png" alt="Instagram Concore" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-4 offset-md-1">
                                <h5>Assine nossa newsletter</h5>
                                <form className="form-style">
                                    <div className="form-group">
                                        <input required type="text"
                                               placeholder="Nome:"
                                               className="form-control"
                                               value={this.state.name}
                                               onChange={e => this.setState({ name: e.target.value }) } />
                                    </div>
                                    <div className="form-group">
                                        <input required
                                               type="text"
                                               placeholder="E-mail:"
                                               className="form-control"
                                               value={this.state.email}
                                               onChange={e => this.setState({ email: e.target.value }) } />
                                    </div>
                                    <div className="button-area">
                                        <button type="submit"
                                                onClick={e => this.onSubmit(e)} >
                                            Enviar
                                        </button>
                                    </div>
                                </form>
                            </div>
                            <div className="col-md-4 text-center-mobile">
                                <h5>Contatos</h5>
                                <p><a href="mailto:contato@concore.io">contato@concore.io</a></p>
                                <p>Alameda Franca, 243 Bela Vista SP</p>
                            </div>
                        </div>
                    </div>
                    <hr/>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <p className="creditos">Copyright © 2019 Concore. Todos os direitos reservados. </p>
                            </div>
                        </div>
                    </div>
                </footer>
                )
    }
}

export default Footer