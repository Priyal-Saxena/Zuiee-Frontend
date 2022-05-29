import React from "react";
import Banner from "../sections/banner";
// import WorkFlow from "../sections/workflow";
// import Package from "../sections/package";
import TeamSection from "../sections/team-section";
import BlogSection from "../sections/blog-section";
import Header from "../components/layout/Header";
import Title from "../sections/title";
const arr1 = [1, 2, 3, 4, 5, 6];
const arr2 = [1, 2, 3, 4, 5, 6, 7, 8];
export default function IndexPage() {
	return (
		<div>
			<Header navPosition="right" className="reveal-from-bottom" link="/" btnText="Logout" />

			<Banner
				heading="Top Quality Digital Products To Explore"
				subtext="Get your blood tests delivered at let home collect sample from the victory of the managements that
						supplies best design system guidelines ever."
			/>

			{/* <WorkFlow />  have to edit css */}
			{/* <Package /> have to edit componnent */}
			<Title heading="Top places to visit" />
			<BlogSection placeid={arr2} />
			<Title heading="Your Friends" />

			<TeamSection frndid={arr1} />
		</div>
	);
}
