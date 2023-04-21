import { Component } from "react";

class CardList extends Component {

    render() {
        const { mons } = this.props;
        return mons.map((mon) => {
          
            return <div key={mon.id}><h1>{mon.name}</h1></div>
            
          })
    }
}

export default CardList;