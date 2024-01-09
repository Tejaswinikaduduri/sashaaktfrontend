const Readalongstories = () => {
	const bodyStyle = {
		width: '70%',
	  };
    return (  <body style={bodyStyle}>
	<div id="carouselExampleIndicators"
		className="carousel slide" data-ride="carousel" data-bs-interval="3000">
		<ol className="carousel-indicators">
			<li data-target="#carouselExampleIndicators"
				data-slide-to="0" className="active"></li>
			<li data-target="#carouselExampleIndicators"
				data-slide-to="1"></li>
			<li data-target="#carouselExampleIndicators"
				data-slide-to="2"></li>
		</ol>
		<div className="carousel-inner">
			<div className="carousel-item active">
				<img className="d-block w-100" src=
"https://res.cloudinary.com/dkhfzpkw2/image/upload/v1700276265/Screenshot_73_nfilsx.png"
					alt="Second slide"/>
			</div>
			
			<div className="carousel-item" >
				<img className="d-block w-100" src=
"https://res.cloudinary.com/dkhfzpkw2/image/upload/v1700276286/Screenshot_74_daqryp.png"
					alt="Third slide"/>
			</div>
			<div className="carousel-item">
				<img className="d-block w-100" src=
"https://res.cloudinary.com/dkhfzpkw2/image/upload/v1700276308/Screenshot_75_lcdra7.png"
					alt="First slide"/>
			</div>
			<div className="carousel-item">
				<img className="d-block w-100" src=
"https://res.cloudinary.com/dkhfzpkw2/image/upload/v1700276333/Screenshot_76_oop80c.png"
					alt="Fourth slide"/>
			</div>
			<div className="carousel-item">
				<img className="d-block w-100" src=
"https://res.cloudinary.com/dkhfzpkw2/image/upload/v1700276349/Screenshot_77_ehispr.png"
					alt="fifth slide"/>
			</div>
			<div className="carousel-item">
				<img className="d-block w-100" src=
"https://res.cloudinary.com/dkhfzpkw2/image/upload/v1700276366/Screenshot_78_wjnwp5.png"
					alt="sixth slide"/>
			</div>
			<div className="carousel-item">
				<img className="d-block w-100" src=
"https://res.cloudinary.com/dkhfzpkw2/image/upload/v1700276381/Screenshot_79_hjisoi.png"
					alt="seven slide"/>
			</div>
			<div className="carousel-item">
				<img className="d-block w-100" src=
"https://res.cloudinary.com/dkhfzpkw2/image/upload/v1700729171/giphy.gif_lykta8.gif"
					alt="seven slide"/>
			</div>
		</div>
		<a className="carousel-control-prev"
		href="#carouselExampleIndicators"
		role="button" data-slide="prev">
			<span className="carousel-control-prev-icon"
				aria-hidden="true"></span>
			<span className="sr-only">Previous</span>
		</a>
		<a className="carousel-control-next"
		href="#carouselExampleIndicators"
		role="button" data-slide="next">
			<span className="carousel-control-next-icon"
				aria-hidden="true"></span>
			<span className="sr-only">Next</span>
		</a>
	
	</div>
	
        

	
</body>);
}
 
export default Readalongstories;
