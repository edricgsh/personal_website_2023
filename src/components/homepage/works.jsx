import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { myWorks } from "../../data/works";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						{myWorks.map((work, index) => {
							return (
								<div key={index} className="work">
									<img
										src={work.image.imgUrl}
										alt={work.image.imgAlt}
										className="work-image"
									/>
									<div className="work-title">
										{work.company}
									</div>
									<div className="work-subtitle">
										{work.jobTitle}
									</div>
									<div className="work-duration">
										{work.duration}
									</div>
								</div>
							);
						})}
					</div>
				}
			/>
		</div>
	);
};

export default Works;
