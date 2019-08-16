import React from 'react'

const goBack = (e,props) => {
  props.history.goBack()
  e.preventDefault()
}

const Samplepage = (props) => (
  <div className="broken-body">
    <main role="main" className="main-container push">
      <section className="broken-container">
        <div className="content">
          <h1>Bad Path</h1>
          <br/>
          <h3 style={{color: "red"}}>404 - {props.location.pathname}</h3>
          <br/>
          <p>
            <a href="/" onClick={(e) => goBack(e,props) } className="btn btn-primary">
              Voltar
            </a>
          </p>
        </div>
      </section>
    </main>
  </div>
)

export default Samplepage