import React from 'react'

const PostContent = () => <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi aperiam deserunt voluptates quis
recusandae inventore commodi sint nisi ducimus nihil dignissimos ex consequuntur iure aspernatur
voluptatem officia, sed quibusdam numquam.</p>

const Post = () => {
	return (
		<section>
			<div className="published-post">
				<div className="post-heading">
					<h2>What is a Virtual DOM?</h2>
				</div>
				<div className="post-metadata">
					<div className="publish-date">
						<i className="fas fa-calendar-week"></i>
						<p>
							Sat, January 15 20201
							</p>
					</div>
					<div className="reading-time">
						<i className="fas fa-stopwatch"></i>
						<p>5 minute read</p>
					</div>
				</div>
				<div className="post-body">
					<PostContent/>
					<PostContent/>

					<PostContent/>
					<PostContent/>
					<PostContent/>
					<PostContent/>
					<PostContent/>
					<PostContent/>
					<PostContent/>
					<PostContent/>
					<PostContent/>
					<PostContent/>
					<PostContent/>
					<PostContent/>
					<PostContent/>

					<PostContent/>
					<PostContent/>
					<PostContent/>
					<PostContent/>
					<PostContent/>
					<PostContent/>
					<PostContent/>
					<PostContent/>

				</div>
			</div>
		</section>
	)
}

export default Post