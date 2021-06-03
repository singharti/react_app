import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

let Navbar = (prop) => {

	var [isloggedin, setUser] = useState()
	useEffect(() => {
		setUser(prop.isloggedin)
	},
		[prop.isloggedin],
	);



	var searchstring = "Search"

	let search = (event) => {
		event.preventDefault();

		console.log(searchstring);

	}
	let searchInput = (event) => {
		event.preventDefault();
		searchstring = event.target.value;
		console.log(searchstring);
	}

	let logout = () => {
		// console.log("in logout");
		setUser(false);
		localStorage.clear();
		//prop.isloggedin = false;
		console.log(" In logout", isloggedin);
	}


	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">

			<Link to="/"><a class="navbar-brand" >
				{/* <img src="/images.webp"  alt="..." /> */}
				{prop.details.projectname}</a>
			</Link>
			<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>

			<div className="collapse navbar-collapse" id="navbarSupportedContent">
				<form className="form-inline col-lg-8">
					<input className="form-control mr-sm-2 col-md-9" type="search" placeholder="Search" aria-label="Search" onChange={searchInput} />

					<button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={search}>Search</button>


				</form>
				{!isloggedin && <Link to="/signup"><a className="my-2 mr-sm-2">Sign up  / </a></Link>}

				<Link to="/login"><a className="my-2 mr-sm-2"> Log In  </a></Link>
				{isloggedin && <button className="btn btn-outline-success" onClick={logout}>Logout</button>}
			</div>
		</nav>
	);


}

export default Navbar;