import React from 'react';
import '../assets/styles/components/Pinterest.scss';
import jardin from '../assets/static/jardin.png';
import rio from '../assets/static/rio.jpeg';
import image from '../assets/static/imagen1.jpeg';
import arbol from '../assets/static/arbol.jpeg';
import agua from '../assets/static/agua.jpeg';
import oscura from '../assets/static/oscura.jpeg';
import casa from '../assets/static/casa.jpg';
import paisaje from '../assets/static/paisaje.jpeg';
import sol from '../assets/static/sol.jpeg';
import decierto from '../assets/static/decierto.jpg';
import piedra from '../assets/static/piedra.jpeg';
import turco from '../assets/static/turco.jpg';


const Pinterest = () =>(
 <section>
	<div className="container">
	<div className="item nivel_1">
		<img src={jardin} />
	</div>

	<div className="item nivel_2" >
		<img src={image} />
	</div>
	<div className="item nivel_3">
		<img src={rio} />
	</div>
 

	<div className="item nivel_1">
		<img src={arbol} />
	</div>
	<div className="item nivel_2">
		<img src={agua} />
	</div>
	<div className="item nivel_3">
		<img src={oscura} />
	</div>

	<div className="item nivel_1">
		<img src={casa} />
	</div>
	<div className="item nivel_2">
		<img src={paisaje} />
	</div>
	<div className="item nivel_3">
		<img src={sol} />
	</div>

	<div className="item nivel_1">
		<img src={decierto} />
	</div>
	<div className="item nivel_2">
		<img src={turco} />
	</div>
	<div className="item nivel_3">
		<img src={piedra} />
	</div>
</div>

</section>

	);

export default Pinterest