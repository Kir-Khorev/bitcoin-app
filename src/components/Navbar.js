import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Container, Nav } from 'react-bootstrap';

export default function NavBar() {
    return (
        <Navbar bg="primary" variant="dark" style={{ margin: '0' }}>
            <Container>
                <Nav className="me-auto" style={{ margin: '0 30px', fontSize: '16px' }}>
                    <LinkContainer to="/"><Nav.Link>Home</Nav.Link></LinkContainer>
                    <LinkContainer to="/converter"><Nav.Link>Converter</Nav.Link></LinkContainer>
                    <LinkContainer to="/watchlist"><Nav.Link>Watch list</Nav.Link></LinkContainer>
                </Nav>
            </Container>
        </Navbar>
    );
}
