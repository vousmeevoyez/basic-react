import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import './Landing.css';
import { Link } from 'react-router-dom';


const LandingPage = () => {
    return (
        <Container>
            <header className="text-center my-5">
                <img src="https://placehold.co/1000x600" alt="Banner" className="img-fluid" />
                <h1 className="display-3 mt-4">Selamat Datang di Layanan Kami</h1>
                <p className="lead">Kami menyediakan solusi untuk membantu Anda sukses.</p>
                <Button color="primary" className="mt-3" tag={Link} to="/crud">Mulai Sekarang</Button>
            </header>
            <section className="my-5">
                <Row>
                    <Col md="4" className="text-center mb-4">
                        <img src="https://placehold.co/600x400" alt="Feature 1" className="img-fluid mb-2" />
                        <h2>Fitur 1</h2>
                        <p>Deskripsi singkat tentang fitur 1.</p>
                    </Col>
                    <Col md="4" className="text-center mb-4">
                        <img src="https://placehold.co/600x400" alt="Feature 2" className="img-fluid mb-2" />
                        <h2>Fitur 2</h2>
                        <p>Deskripsi singkat tentang fitur 2.</p>
                    </Col>
                    <Col md="4" className="text-center mb-4">
                        <img src="https://placehold.co/600x400" alt="Feature 3" className="img-fluid mb-2" />
                        <h2>Fitur 3</h2>
                        <p>Deskripsi singkat tentang fitur 3.</p>
                    </Col>
                </Row>
            </section>
        </Container>
    );
};

export default LandingPage;
