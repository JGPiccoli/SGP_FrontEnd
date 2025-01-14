import { React } from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { HeaderStyle } from "./style";

function Header({ title, icon }) {
    return (
        <Row>
            <Col>
                <HeaderStyle>
                    {icon}
                    <span>{title}</span>
                </HeaderStyle>
            </Col>
        </Row>
    );
}

export default Header;
