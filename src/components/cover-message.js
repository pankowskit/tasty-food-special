import React,{Component} from "react";
import {Link} from "react-router-dom";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

class CoverMessage extends Component{
    render(){
        let navButton="";
        if(this.props.config.returnNav!==undefined){
            navButton = <Link className="btn btn-outline-light rounded-pill" to={this.props.config.returnNav.link}>{this.props.config.returnNav.title}</Link>;
        }
        return(
            <Row className="w-100 mt-5">
               <Col xs={11} sm={9} md={6} lg={5} className="mx-auto text-white text-center">
                    <h1 className="display-6 mb-3">
                        {(this.props.config.title===undefined)?"":this.props.config.title}
                    </h1>
                    <p className="lead mb-3">
                        {(this.props.config.text===undefined)?"":this.props.config.text}
                    </p>
                    <div className="w-100 text-center">
                        {navButton}
                    </div>
               </Col>
            </Row>
        );
    }
}

export default CoverMessage;