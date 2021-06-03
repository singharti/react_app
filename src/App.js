import Navbar from './component/Navbar.js';
import Signup from './component/Signup.js';
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './component/Home.js';
import Pagenotfound from './component/Pagenotfound.js'
import Login from './component/Login.js'

function App() {
	var [login, setLogin] = useState(false)
	var myphone = () => {
		setLogin(true);

	}

	var [likes, setLikes] = useState(0);
	var [dislikes, setDislikes] = useState(0);
	var [maxdislike, setMaxlikes] = useState(0);

	useEffect(() => {
	}, [maxdislike])

	var details = { projectname: "Sprinkles Bakery", home: "Home", about: "About", product: "Products", contact: "Contact Us" }
	return (
		<div className="App">

			<Router>
				<Navbar isloggedin={login} details={details}></Navbar>

				<Switch>
					<Route exact path="/"><Home /> </Route>
					<Route exact path="/signup" component={Signup}></Route>
					<Route exact path="/login" component={Login}></Route>

					<Route exact path="/*" component={Pagenotfound}></Route>

				</Switch>
			</Router>


			{/*<Signup calllme={myphone}  /> */}
		</div>
	);
}

export default App;
