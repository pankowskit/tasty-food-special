import React,{Component} from "react";
import Container from "react-bootstrap/Container";
import CoverMessage from "../components/cover-message";

class ComingsoonPage extends Component{
    render(){
        return(
            <Container fluid 
            className={(this.props.config.pageClass===undefined)?"":this.props.config.pageClass}>
                <CoverMessage config={this.props.config}/>
            </Container>
        );
    }
}

export default ComingsoonPage;