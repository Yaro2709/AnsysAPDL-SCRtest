import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { img } from 'entities/AnsysProject';

const MainPage = () => (
    <div>
        <Container>
            <Row>
                {
                    Object.keys(img).map((item, index) => (
                        <Col className="p-2" sm={1} lg="6">
                            <Card>
                                <Card.Img src={img[item]} alt={img[item]} />
                            </Card>
                        </Col>
                    ))
                }
            </Row>
        </Container>
    </div>
);

export default MainPage;
