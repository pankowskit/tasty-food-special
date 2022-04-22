import React,{Component} from "react";
import Container from "react-bootstrap/Container";
import PrivacyContainer from "../components/privacy-container";

class PrivacyPage extends Component{
    render(){
        return(
            <Container fluid 
            className={(this.props.config.pageClass===undefined)?"":this.props.config.pageClass}>
                <PrivacyContainer config={this.props.config}/>
            </Container>
        );
    }
}

export default PrivacyPage;