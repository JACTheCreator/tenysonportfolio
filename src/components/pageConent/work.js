import React from "react"

import Github from "../../images/github.svg"
import Extsign from "../../images/sign.svg"
import "../../styles/work.css"
import IconGitHub from "../icon/github"

const work = () => (
	 <section id="work" className="work">
		 <h3 className="page-heading">Work</h3>
		 <div classname="sub-work">
			 <div className="projects">
				<div className="project-cards">
					<header>
						<div className="card-heading">
							<h1>QR Code Scanner</h1>
							<a className="card-img" href="https://github.com/Tenyson05/QR-code-scanner">
								<IconGitHub />
							</a>
						</div>
						<div className="card-info">
							<p className="card-content">QR code scanner for android made with the QR Code Scanner</p>
						</div>
					</header>
					<footer>
						<ul className="foot-info">
							<li>Flutter</li>
							<li>Dart</li>
							<li>MySQL</li>
						</ul>
					</footer>
				</div>
				<div className="project-cards">
					<header>
						<div className="card-heading">
							<h1>Resume</h1>
							<a className="card-img" href="https://github.com/Tenyson05/resume">
								<IconGitHub />
							</a>
						</div>
						<div className="card-info">
							
							<p className="card-content">My resume in the form of a player card</p>

						</div>
					</header>
					<footer>
						<ul className="foot-info">
							<li>React</li>
							<li>JS</li>
							<li>MySQL</li>
						</ul>
					</footer>
				</div>
				<div className="project-cards">
					<header>
						<div className="card-heading">
							<h1>Netflix Clone</h1>
							<a className="card-img" href="https://github.com/Tenyson05/NetflixClone">
								<IconGitHub />
							</a>
						</div>
						<div className="card-info">
							
							<p className="card-content">A netflix UI clone for android.</p>

						</div>
					</header>
					<footer>
						<ul className="foot-info">
							<li>Flutter</li>
							<li>Dart</li>
							<li>MySQL</li>
						</ul>
					</footer>
				</div>
				<div className="project-cards">
					<header>
						<div className="card-heading">
							<h1>AI Pneumonia system</h1>
							<a className="card-img" href="https://github.com/Tenyson05/AI-pneumonia-expert-system">
								<IconGitHub />
							</a>
						</div>
						<div className="card-info">
							
							<p className="card-content">AI system capable of diagnosing pneumonia</p>

						</div>
					</header>
					<footer>
						<ul className="foot-info">
							<li>Python</li>
							<li>Jupyter</li>
							<li>MySQL</li>
						</ul>
					</footer>
				</div>
				<div className="project-cards">
					<header>
						<div className="card-heading">
							<h1>Halite 2019 bot</h1>
							<a className="card-img" href="https://github.com/Tenyson05/HaliteChallenge2019">
								<IconGitHub />
							</a>
						</div>
						<div className="card-info">
							
							<p className="card-content">Halite 2019 challenge bot create and base on Semtex(Youtuber) halite bot and was then transform with AI properties. </p>

						</div>
					</header>
					<footer>
						<ul className="foot-info">
							<li>Python</li>
							<li>Express</li>
							<li>MySQL</li>
						</ul>
					</footer>
				</div>
				<div className="project-cards">
					<header>
						<div className="card-heading">
							<h1>Portflio</h1>
							<a className="card-img" href="https://github.com/Tenyson05/tenysonportfolio">
								<IconGitHub />
							</a>
						</div>
						<div className="card-info">
							
							<p className="card-content">Personal portolio</p>

						</div>
					</header>
					<footer>
						<ul className="foot-info">
							<li>Reactjs</li>
							<li>Gatsby</li>
							<li>CSS</li>
						</ul>
					</footer>
				</div>
			 </div>

		 </div>
	 </section>
)


export default work;