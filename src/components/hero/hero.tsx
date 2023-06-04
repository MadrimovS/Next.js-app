import React from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Box from "@mui/material/Box";
import Image from "next/image";
import { Avatar, Typography } from "@mui/material";
import { format } from "date-fns";

const Hero = () => {
	return (
		<Box width={"100%"} height={"100vh"} sx={{ backgroundColor: "#000" }}>
			<Carousel
				responsive={{
					mobile: {
						breakpoint: { max: 4000, min: 0 },
						items: 1,
					},
				}}
			>
				{data.map((item) => (
					<Box key={item.image}>
						<Box sx={{ position: "relative", width: "100%", height: "70vh" }}>
							<Image src={item.image} alt={item.title} fill style={{ objectFit: "cover" }} />
							<Box
								sx={{
									position: "absolute",
									top: 0,
									left: 0,
									bottom: 0,
									right: 0,
									width: "100%",
									height: "100%",
									backgroundColor: "rgba(0,0,0,.6)",
								}}
							>
								<Box
									width={"70%"}
									// display: { xs: "none", sm: "flex" },

									color={"#fff"}
									position={"relative"}
									sx={{ top: "50%", transform: "translateY(-50%)", paddingLeft: "50px" }}
								>
									<Typography variant="h3">{item.title}</Typography>
									<Typography variant="h6">{item.exerpt}</Typography>
									<Box sx={{ display: "flex", gap: "10px", marginTop: "20px" }}>
										<Avatar alt={item.author.name} src={item.author.image} />
										<Box>
											<Typography variant="subtitle2">{item.author.name}</Typography>
											<Typography variant="caption">
												{format(new Date(), "dd MMM, yyyy")} &#x2022; 10 min read
											</Typography>
										</Box>
									</Box>
								</Box>
							</Box>
						</Box>
					</Box>
				))}
			</Carousel>
		</Box>
	);
};

export default Hero;

const data = [
	{
		image: "https://media.graphassets.com/MxJZhmooRRuudoErkQ38",
		title: "Technical SEO with Hygraph",
		exerpt: "Get started with your SEO implementation when using a Headless CMS",
		author: {
			name: "Sardor Madrimov",
			image: "https://media.graphassets.com/DkfNqQNGRz2F4UFntKQx",
		},
	},
	{
		image: "https://media.graphassets.com/bh3K2NNtTHCN260Xfq9h",
		title: "Union Types and Sortable Relations with Hygraph",
		exerpt: "Learn more about Polymorphic Relations and Sortable Relations with Hygraph",
		author: {
			name: "Sardor Madrimov",
			image: "https://media.graphassets.com/DkfNqQNGRz2F4UFntKQx",
		},
	},
];
