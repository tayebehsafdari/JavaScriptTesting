import './App.scss';
import {Container} from 'react-bootstrap';
import Link from "./Link";
import CheckboxWithLabelRTL from "./CheckboxWithLabelRTL";
import CheckboxWithLabelEnzyme from "./CheckboxWithLabelEnzyme";

function App() {
    return (
        <div className="App my-5">
            <Container>
                <Link page="http://www.facebook.com">Facebook</Link>
                <br/>
                <br/>
                <CheckboxWithLabelRTL labelOn="On" labelOff="Off"/>
                <br/>
                <br/>
                <CheckboxWithLabelEnzyme labelOn="On" labelOff="Off"/>
            </Container>
        </div>
    );
}

export default App;
