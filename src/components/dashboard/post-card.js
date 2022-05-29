/** @jsx jsx */
import { jsx, Image, Box, Heading, Text, Flex, Link } from "theme-ui";

export default function PostCard({ key, src, alt, postLink, streetAddress, city, state, dist }) {
	return (
		<Box sx={styles.card}>
			<Box sx={styles.thumbnail}>
				<Image src={src} alt={alt} />
			</Box>

			<Flex sx={styles.postContent}>
				<Heading sx={styles.title}>
					{streetAddress}
					{/* <Link href={postLink}>{title}</Link> */}
				</Heading>

				<Flex sx={styles.postFooter}>
					<Text sx={styles.postFooter.add}>
						{city}, {state}
					</Text>
					<Text sx={styles.postFooter.dist}>{dist} km</Text>
				</Flex>
			</Flex>
		</Box>
	);
}

const styles = {
	card: {
		backgroundColor: "white",
		boxShadow: "0px 4px 10px rgba(38,78,118,0.12)",
		borderRadius: "7px",
		m: "0 15px 40px",
		transition: "all 0.3s",
		"&:hover": {
			boxShadow: "0px 5px 20px rgba(38,78,118,0.15)",
		},
		maxWidth: "280px",

		// minWidth: "250px",
	},

	thumbnail: {
		borderRadius: "7px 7px 0 0",
		overflow: "hidden",
		display: "flex",
		img: {
			width: "100%",
		},
	},
	postContent: {
		flexDirection: "column",
		justifyContent: "space-between",
		padding: ["15px 20px", "25px 30px"],
	},
	title: {
		fontSize: [3, null, null, null, null, 4],
		color: "#000",
		lineHeight: [1.4, 1.5],
		fontWeight: 700,
		mb: [3, 4, 5],
		pr: [0, null, null, null, 5],
		marginBottom: "1rem !important",
	},
	postFooter: {
		width: "100%",
		justifyContent: "space-between",
		flexDirection: "column",
		alignItem: "center",
		add: {
			fontSize: ["12px", null, 2],
			fontWeight: 500,
			color: "primary",
			lineHeight: 1.4,
		},
		dist: {
			fontSize: ["12px", null, 2],
			fontWeight: 400,
			lineHeight: 1.5,
		},
	},
};
