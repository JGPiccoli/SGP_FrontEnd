import { React } from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { Container } from "./style";

function PageContainer(props) {
    return (
        <Container>
            <Row>
                <Col className="col-12">{props.children}</Col>
            </Row>
        </Container>
    );
}

export default PageContainer;
