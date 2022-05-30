/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Box } from "theme-ui";
// import SectionHeader from 'components/section-header';
import PostCard from "../components/dashboard/post-card";
// import ButtonGroup from 'components/button-group';
// import Carousel from 'react-multi-carousel';
import PostThumb1 from "../assets/blog/1.jpg";
import PostThumb2 from "../assets/blog/2.jpg";
import PostThumb3 from "../assets/blog/3.jpg";
import styles from "./styles.module.css";
const faker = require("faker");
// const data = [
// 	{
// 		id: 1,
// 		imgSrc: PostThumb1,
// 		altText: "Marketing",
// 		postLink: "#",
// 		title: "Product Marketing: Monopoly Market",
// 		authorName: "Cali Cartel",
// 		date: "Oct 20, 2020",
// 	},
// 	{
// 		id: 2,
// 		imgSrc: PostThumb2,
// 		altText: "Creative",
// 		postLink: "#",
// 		title: "Product Marketing: Creative Market",
// 		authorName: "James Carter",
// 		date: "Oct 20, 2020",
// 	},
// 	{
// 		id: 3,
// 		imgSrc: PostThumb3,
// 		altText: "Startup",
// 		postLink: "#",
// 		title: "Product Marketing: Startup Product Sales",
// 		authorName: "Aston Aagar",
// 		date: "Oct 20, 2020",
// 	},
// 	{
// 		id: 4,
// 		imgSrc: PostThumb2,
// 		altText: "Creative",
// 		postLink: "#",
// 		title: "Product Marketing: Creative Market",
// 		authorName: "James Carter",
// 		date: "Oct 20, 2020",
// 	},
// 	{
// 		id: 5,
// 		imgSrc: PostThumb1,
// 		altText: "Marketing",
// 		postLink: "#",
// 		title: "Product Marketing: Monopoly Market",
// 		authorName: "Cali Cartel",
// 		date: "Oct 20, 2020",
// 	},
// 	{
// 		id: 6,
// 		imgSrc: PostThumb2,
// 		altText: "Creative",
// 		postLink: "#",
// 		title: "Product Marketing: Creative Market",
// 		authorName: "James Carter",
// 		date: "Oct 20, 2020",
// 	},
// 	{
// 		id: 7,
// 		imgSrc: PostThumb3,
// 		altText: "Startup",
// 		postLink: "#",
// 		title: "Product Marketing: Startup Product Sales",
// 		authorName: "Aston Aagar",
// 		date: "Oct 20, 2020",
// 	},
// 	{
// 		id: 8,
// 		imgSrc: PostThumb2,
// 		altText: "Creative",
// 		postLink: "#",
// 		title: "Product Marketing: Creative Market",
// 		authorName: "James Carter",
// 		date: "Oct 20, 2020",
// 	},
// ];

// const responsive = {
// 	desktop: {
// 		breakpoint: { max: 3000, min: 1310 },
// 		items: 3,
// 		slidesToSlide: 3, // optional, default to 1.
// 	},
// 	laptop: {
// 		breakpoint: { max: 1310, min: 1024 },
// 		items: 3,
// 		slidesToSlide: 3, // optional, default to 1.
// 	},
// 	tablet: {
// 		breakpoint: { max: 1024, min: 640 },
// 		items: 2,
// 		slidesToSlide: 2, // optional, default to 1.
// 	},
// 	mobile: {
// 		breakpoint: { max: 639, min: 0 },
// 		items: 1,
// 		slidesToSlide: 1, // optional, default to 1.
// 	},
// };

export default function BlogSection(placeid) {
	let places = [];
	function generatePlace(placeid) {
		// let users = [];

		for (let i = 0; i < 8; i++) {
			// for (const place in placeid) {
			let streetAddress = faker.address.streetAddress(false);
			let city = faker.address.cityName();
			let state = faker.address.state();
			let dist = faker.datatype.number({
				min: 1,
				max: 25,
			});

			places.push({
				id: i,
				// imgSrc: {'https://source.unsplash.com/random?person?sig=${Math.random()}'},
				imgSrc: `http://placeimg.com/640/480/arch?nocache=${Math.random()}`,
				altText: streetAddress,
				streetAddress: streetAddress,
				city: city,
				state: state,
				dist: dist,
			});
		}

		// return { data: users };
	}
	generatePlace(placeid);
	return (
		<section className={styles.blogSectionRow}>
			{places.map(item => (
				<PostCard
					key={item.id}
					src={item.imgSrc}
					alt={item.altText}
					// postLink={item.postLink}
					streetAddress={item.streetAddress}
					city={item.city}
					state={item.state}
					dist={item.dist}
				/>
			))}
		</section>
	);
}
