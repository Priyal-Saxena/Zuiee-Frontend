import React, { useState, useRef, useEffect } from "react";
import Banner from "../sections/banner";
import TeamSection from "../sections/team-section";
import BlogSection from "../sections/blog-section";
import Header from "../components/layout/Header";
import Title from "../sections/title";
const arr1 = [1, 2, 3, 4, 5, 6];
const arr2 = [1, 2, 3, 4, 5, 6, 7, 8];
export default function IndexPage() {
	const [data, setData] = useState([{}]);

	useEffect(() => {
		fetch("/get_recom")
			.then(res => res.json())
			.then(data => {
				setData(data);
				console.log(data);
			});
	}, []); //empty array is passed at last so that this code runs only once
	return (
		<div>
			<Header navPosition="right" className="reveal-from-bottom" link="/" btnText="Logout" />

			<Banner heading="Most Popular Places To Explore" subtext="Dream. Explore. Discover." />
			<div>
				{typeof data.recomLists === "undefined" ? (
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
						<Title heading="Top places specially curated for you" />
						{/* gen recom */}
						<BlogSection placeid={data.recomLists.genRecom} />

						<Title heading="Discover where your friends are" />
						{/* frnd recom */}
						<BlogSection placeid={data.recomLists.frndRecom} />

						<Title heading="Most popular destinations" />
						<BlogSection placeid={data.recomLists.topRatedRecom} />

						<Title heading="Your favourite spots" />
						{/* top rated recom */}
						<BlogSection placeid={data.recomLists.topVisitedRecom} />

						<Title heading="Your Friends" />
						<TeamSection frndid={data.recomLists.Frnds} />
					</div>
				)}
			</div>
		</div>
	);
}
