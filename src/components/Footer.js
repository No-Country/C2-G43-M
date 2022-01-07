import { Container, Nav, NavItem, NavLink } from 'reactstrap';
import footer from '../assets/footer.css';
function Footer() {
  return (
    <footer className="footer  bottom-0 ">
      <Container fluid>
        <div className="copyright">
          © {new Date().getFullYear()} made with{' '}
          <i className="tim-icons icon-heart-2" /> by for a better web.
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
