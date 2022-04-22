import React,{Component} from 'react';
import {Link} from "react-router-dom";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

class PrivacyContainer extends Component{
    render(){
        let navButton="";
        if(this.props.config.returnNav!==undefined){
            navButton = <Link className="btn btn-outline-light rounded-pill" to={this.props.config.returnNav.link}>{this.props.config.returnNav.title}</Link>;
        }
        return(
            <Row className="mx-0 w-100 pt-5">
                <Col xs={11} sm={9} md={7} className="mx-auto">
                    <Card className="text-white bg-dark opacity-9 p-4 mx-auto">
                        <h1 class="h5 fw-bold text-uppercase text-center">
                            Privacy policy
                        </h1>
                        <p class="pt-2">
                            This website is a demo version of real website, It doesn't collect and process, 
                            in long term meaning (longer than needed for website operation during visitor's 
                            presence), any user (visitor) data. All information collected during visitor's 
                            presence on this website is used only for technical purposes, required for correct 
                            operation of website or demonstration purposes related to technical mechanisms 
                            and presentation of its operation.
                        </p>
                        <p class="pt-2">
                            All data stored in cookies is directly related to saved visitor's settings 
                            for website's mechanisms, and can be managed by visitor with functionality 
                            provided by visitor's web browser - in order to get more information visitor 
                            should check web browser's manual.
                        </p>
                        <p  class="pt-2">
                            However this website may contain attached third-party addons (like for 
                            example: scripts added by hosting services provider) which may collect 
                            visitors data for security and technical purposes. In order to know more 
                            about them, visitor should visit hosting provider's website and check 
                            privacy policy related to collected data.
                        </p>
                        <p class="pt-2 pb-3">
                            All materials used for creation of this website were acquired from legal 
                            resources. Any convergences and similarities with any materials presented 
                            on other websites or resources are accidental.
                        </p>
                        <div class="w-100 text-center">
                            {navButton}
                        </div>
                    </Card>
                </Col>
            </Row>
        );
    }
}

export default PrivacyContainer;