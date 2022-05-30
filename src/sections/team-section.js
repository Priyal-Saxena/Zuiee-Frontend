/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Grid } from "theme-ui";
// import SectionHeader from "components/section-header";
import TeamCard from "../components/dashboard/team-card";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import styles from "./styles.module.css";
import Member1 from "../assets/team/member-1.png";
import Member2 from "../assets/team/member-2.png";
import Member3 from "../assets/team/member-3.png";
import Member4 from "../assets/team/member-4.png";
import Member5 from "../assets/team/member-5.png";
import Member6 from "../assets/team/member-6.png";
const faker = require("faker");
// var Faker = require("./node_modules/Faker");

export default function TeamSection(frndid) {
	let users = [];
	console.log(frndid.frndid);
	function generateFriend(frndid) {
		// let users = [];

		for (let i = 0; i < 6; i++) {
			// for (const frnd in frndid) {
			let title = faker.name.findName();
			let email = faker.internet.email();
			let designation = faker.name.jobType();

			users.push({
				id: i,
				// imgSrc: {'https://source.unsplash.com/random?person?sig=${Math.random()}'},
				altText: title,
				title: title,
				designation: designation,
				email: email,
				imgSrc: `https://source.unsplash.com/random?profile?${Math.random()}`,
				socialProfile: [
					{
						id: 1,
						name: "facebook",
						path: "#",
						icon: <FaFacebookF />,
					},
					{
						id: 2,
						name: "twitter",
						path: "#",
						icon: <FaTwitter />,
					},
					{
						id: 3,
						name: "instagram",
						path: "#",
						icon: <FaInstagram />,
					},
				],
			});
		}

		// return { data: users };
	}
	generateFriend(frndid);
	return (
		<section>
			<Container>
				{/* <SectionHeader slogan="our team" title="The most qualified and talented individuals" /> */}

				{/* <Grid sx={styles.teamSectionRow}> */}
				<div className={styles.teamSectionRow}>
					{" "}
					{users.map(item => (
						<TeamCard
							key={`team--key${item.id}`}
							// src={"https://source.unsplash.com/random?person?sig=${Math.random()}"}
							// src={item.imgSrc}
							src={item.imgSrc}
							altText={item.altText}
							title={item.title}
							designation={item.designation}
							social={item.socialProfile}
						/>
					))}
				</div>

				{/* </Grid> */}
			</Container>
		</section>
	);
}
