/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Box, Heading, Text, Image, Button } from "theme-ui";
// import BannerImg from "https://images.unsplash.com/photo-1530789253388-582c481c54b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80";
import BannerImg from "../assets/banner-thumb.png";
import ShapeLeft from "../assets/shape-left.png";
import ShapeRight from "../assets/shape-right.png";
import "./banner.css"
{
	/* <iframe src="https://giphy.com/embed/lXC2gmHf2ypUs" width="480" height="255" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p>
<a href="https://giphy.com/gifs/lXC2gmHf2ypUs">via GIPHY</a></p> */
}

export default function Banner(props) {
	return (
		<section sx={styles.banner} id="home">
			<Container sx={styles.banner.container}>
				<Box sx={styles.banner.contentBox}>
					<Heading as="h1" variant="heroPrimary">
						{props.heading}
					</Heading>
					<Text as="p" variant="heroSecondary">
						{props.subtext}
					</Text>
					{/* <Button variant="primary">Explore</Button> */}
				</Box>

				<Box sx={styles.banner.imageBox}>
					{/* <div style={{
						width:"100%",
						height:0,
						paddingBottom:"53%",
						position:"relative"
					}}>
						<iframe
							src="https://giphy.com/embed/lXC2gmHf2ypUs"
							width="100%"
							height="100%"
							style={{ position: "absolute" }}
							frameBorder="0"
							// class="giphy-embed"
							allowFullScreen
						></iframe>
					</div> */}
<div id="box" className="gradient-border">
<Image style={{maxWidth:"80vw"}}  src={BannerImg} alt="banner" />
{/* <Image  src="https://images.unsplash.com/photo-1495837174058-628aafc7d610?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="banner" /> */}
{/* <Image  src="https://images.unsplash.com/photo-1497302347632-904729bc24aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="banner" /> */}
</div>
				</Box>
			</Container>
		</section>
	);
}

const styles = {
	banner: {
		pt: ["140px", "145px", "155px", "170px", null, null, "180px", "215px"],
		pb: [2, null, 0, null, 2, 0, null, 5],
		position: "relative",
		zIndex: 2,
		"&::before": {
			position: "absolute",
			content: '""',
			bottom: 6,
			left: 0,
			height: "100%",
			width: "100%",
			zIndex: -1,
			backgroundImage: `url(${ShapeLeft})`,
			backgroundRepeat: `no-repeat`,
			backgroundPosition: "bottom left",
			backgroundSize: "36%",
		},
		"&::after": {
			position: "absolute",
			content: '""',
			bottom: "40px",
			right: 0,
			height: "100%",
			width: "100%",
			zIndex: -1,
			backgroundImage: `url(${ShapeRight})`,
			backgroundRepeat: `no-repeat`,
			backgroundPosition: "bottom right",
			backgroundSize: "32%",
		},
		container: {
			minHeight: "inherit",
			display: "flex",
			flexDirection: "column",
			justifyContent: "center",
		},
		contentBox: {
			width: ["100%", "90%", "535px", null, "57%", "60%", "68%", "60%"],
			mx: "auto",
			textAlign: "center",
			mb: ["40px", null, null, null, null, 7],
		},
		imageBox: {
			justifyContent: "center",
			textAlign: "center",
			display: "inline-flex",
			mb: [0, null, -6, null, null, "-40px", null, -3],
			img: {
				position: "relative",
				height: [245, "auto"],
			},
		},
		
	},
};
