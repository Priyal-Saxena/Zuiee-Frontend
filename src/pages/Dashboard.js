import React, { useState, useRef, useEffect } from "react";
import Banner from "../sections/banner";
import TeamSection from "../sections/team-section";
import BlogSection from "../sections/blog-section";
import Header from "../components/layout/Header";
import Title from "../sections/title";
const arr1 = [1, 2, 3, 4, 5, 6];
const arr2 = [1, 2, 3, 4, 5, 6, 7, 8];
export default function IndexPage() {
	const [data1, setData1] = useState([{}]);

	useEffect(() => {
		fetch("/get_recom")
			.then(res => res.json())
			.then(data1 => {
				setData(data1);
				console.log(data1);
			});
	}, []); //empty array is passed at last so that this code runs only once

	const [data2, setData2] = useState([{}]);

	useEffect(() => {
		fetch("/get_genRecom")
			.then(res => res.json())
			.then(data2 => {
				setData(data2);
				console.log(data2);
			});
	}, []); //empty array is passed at last so that this code runs only once
	return (
		<div>
			<Header navPosition="right" className="reveal-from-bottom" link="/" btnText="Logout" />

			<Banner heading="Most Popular Places To Explore" subtext="Dream. Explore. Discover." />
			<div>
				{typeof data1.recomLists === "undefined" ? (
					<p
						style={{
							width: "100%",
							height: "20vh",
							marginTop: "40vh",
							padding: "2vh 0",
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
						}}
					>
						Loading
					</p>
				) : (
					<div>
						<Title heading="Discover where your friends are" />
						{/* frnd recom */}
						<BlogSection placeid={data1.recomLists.frndRecom} />

						<Title heading="Most popular destinations" />
						<BlogSection placeid={data1.recomLists.topRatedRecom} />

						<Title heading="Your favourite spots" />
						{/* top rated recom */}
						<BlogSection placeid={data1.recomLists.topVisitedRecom} />

						<Title heading="Your Friends" />
						<TeamSection frndid={data1.recomLists.Frnds} />
					</div>
				)}

				<Title heading="Top places specially curated for you" />
				{typeof data2.recomLists === "undefined" ? (
					<p
						style={{
							width: "100%",
							height: "20vh",
							marginTop: "40vh",
							padding: "2vh 0",
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
						}}
					>
						Loading
					</p>
				) : (
					<div>
						<BlogSection placeid={data2.recomLists.genRecom} />
					</div>
				)}
				{/* gen recom */}
			</div>
		</div>
	);
}
