import React from "react";
import Feature from "./feature";
import Pagination from "./pagination";

const featureList = ({ posts }) => {

	return (
		<section className="page__feature feature">
			<div className="feature__container container">
				<div className="feature__block">
					<div className="feature__header">
						<h3 className="feature__title">
							Featured works
						</h3>
					</div>
					<div className="feature__body">
						{posts.map(post =>
							<Feature post={post} key={Date.now()} />
						)}
					</div>
				</div>
				<Pagination key={Date.now()} />
			</div>
		</section>
	)

}

export default featureList;