import { Component } from "react";

class SearchBox extends Component {

    render() {
        return (
            <input className={this.props.className} 
                type='search' 
                placeholder={this.props.placeHolder}
                onChange={this.props.onSearchChangeHandler} 
            />
        )
    }
}
export default SearchBox;