import './App.scss';
import {Container} from 'react-bootstrap';
import Link from "./Link";
import CheckboxWithLabel from "./CheckboxWithLabel";

function App() {
    return (
        <div className="App my-5">
            <Container>
                <Link page="http://www.facebook.com">Facebook</Link>
                <br/>
                <br/>
                <CheckboxWithLabel labelOn="On" labelOff="Off"/>
            </Container>
        </div>
    );
}

export default App;
