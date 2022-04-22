import React,{Component} from "react";

class CartPage extends Component{
    render(){
        return(
            <div className={(this.props.config.pageClass===undefined)?"":this.props.config.pageClass}>
                
            </div>
        );
    }
}

export default CartPage;