import React from 'react';
//import {db} from '../firebaseInit.js';
class Total extends React.Component {
  constructor(props) {
    super(props);

    this.state={
      client: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({client: event.target.value});
    console.log(this.state.client)
  }
  
  render() {
   

    return (
<>

<div>
     
       
        <span className="total">{`Total          ${this.props.total}`}$</span>
        
       
      </div>
       <div>
       <button className="btn-total" id="send"  >Enviar a cocina</button>  <input className="input" value={this.state.client} type="text" onChange={this.handleChange} placeholder="Nombre cliente"></input>
       </div>
       </>
    )

  }

}

export default Total;