import React,{Component} from 'react';
import {Container,Col,Row} from "react-bootstrap";
import {Link} from "react-router-dom";

class Footer extends Component{
    render(){
        return(
            <Container fluid className="w-100 p-2">
                <Row className="w-100">
                    <Col xs={12} className="text-center text-white small">
                        <small>
                            Copyright &copy; 2022 Tomasz Pankowski. 
                            <Link to="/privacy" 
                                className="ms-1 text-white text-decoration-none">
                                Privacy policy.
                            </Link>
                        </small>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Footer;