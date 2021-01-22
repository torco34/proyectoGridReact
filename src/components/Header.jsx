import React from 'react';
import '../assets/styles/components/Header.scss';
import logo from '../assets/static/platzi.png';

const Header = () => (
<header>
<div className="hero">
<div className="hero_container">
 <div className="img">
	<img src={logo} />
</div>
		<h1 className="titulo">
		 Curso de Grid
		</h1>

		<div className="discription">
		<p>grid es un curso s de diseño dirigidas a los desarrolladores de aplicaciones web. El CSS grid se puede utilizar para lograr muchos diseños diferentes.</p>
        </div>
        <form action="" className="form">
			<p>Registrate a Platzi</p>
		<input type="text" placeholder="Nombre"/>
		<input type="text" placeholder="Correo Electronico"/>
		<button type="submit">Comienza ahora
		</button>
	    </form>
	    <div className="countdown">
		<p>Lanzamiento:</p>
		<p>
			<span>01d</span>
			<span>03h</span>
			<span>09m</span>
			<span>05s</span>
		</p>
	</div>

		</div>
		</div>
	</header>


	)


export default Header