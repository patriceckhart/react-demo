import React from 'react';
import './styles.scss';
import svgLogo from "./assets/rocket-launch-duotone.svg"
import Test from "./components/Test";

const App = () => {
    return (
        <div className="App">

            <p>App</p>

			<div className="brand">
				<img src={svgLogo} style={{width: '200px', height: 'auto'}} />
			</div>

			<Test label="Foo">
				<p>Children</p>
			</Test>

        </div>
    );
};
export default App;
