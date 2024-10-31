import React, { useState } from 'react'
import './qualification.css'

const Qualification = () => {
	const [toggleState, setToggleState] = useState(1)

	const toggleTab = index => {
		setToggleState(index)
	}
	return (
		<section className='qualification section'>
			<h2 className='section__title'>Ixtisas</h2>
			<span className='section__subtitle'>Mənim şəxsi səyahətim</span>

			<div className='qualification__container container'>
				<div className='qualification__tabs'>
					<div
						className={
							toggleState === 1
								? 'qualification__button qualification__active button--flex'
								: 'qualification__button button--flex'
						}
						onClick={() => toggleTab(1)}
					>
						<i className='uil uil-graduation-cap qualification__icon'></i>
						Təhsil
					</div>

					<div
						className={
							toggleState === 2
								? 'qualification__button qualification__active button--flex'
								: 'qualification__button button--flex'
						}
						onClick={() => toggleTab(2)}
					>
						<i className='uil uil-briefcase-alt qualification__icon'></i>
						Təcrübə
					</div>
				</div>

				<div className='qualification__section'>
					<div
						className={
							toggleState === 1
								? 'qualification__content qualification__content-active'
								: 'qualification__content'
						}
					>
						<div className='qualification__data'>
							<div>
								<h3 className='qualification__title'>
									Cornea External Eye Diseases & Refractive Surgery
								</h3>
								<span className='qualification__subtitle'>
									Singapore - SNEC
								</span>
								<div className='qualification__calendar'>
									<i className='uil uil-calendar-alt'></i>
									03/2011 - 04/2011
								</div>
							</div>

							<div>
								<span className='qualification__rounder'></span>
								<span className='qualification__line'></span>
							</div>
						</div>

						<div className='qualification__data'>
							<div></div>

							<div>
								<span className='qualification__rounder'></span>
								<span className='qualification__line'></span>
							</div>
							<div>
								<h3 className='qualification__title'>
									Cornea Ant.Segment - IEH & LV PEI
								</h3>
								<span className='qualification__subtitle'>
									Dhaka - Bangladesh
								</span>
								<div className='qualification__calendar'>
									<i className='uil uil-calendar-alt'></i>
									07/2007 - 09/2008
								</div>
							</div>
						</div>

						<div className='qualification__data'>
							<div>
								<h3 className='qualification__title'>
									Glaucoma Fellowship - Eye Infirmary & Training Complex
								</h3>
								<span className='qualification__subtitle'>
									Chittagong - Bangladesh
								</span>
								<div className='qualification__calendar'>
									<i className='uil uil-calendar-alt'></i>
									11/2006 - 05/2007
								</div>
							</div>

							<div>
								<span className='qualification__rounder'></span>
								<span className='qualification__line'></span>
							</div>
						</div>

						<div className='qualification__data'>
							<div></div>

							<div>
								<span className='qualification__rounder'></span>
								<span className='qualification__line'></span>
							</div>
							<div>
								<h3 className='qualification__title'>
									Residency training program in Ophthalmology
								</h3>
								<span className='qualification__subtitle'>
									Baku - Caspian Compassion Project
								</span>
								<div className='qualification__calendar'>
									<i className='uil uil-calendar-alt'></i>
									09/2003 - 09/2006
								</div>
							</div>
						</div>
					</div>

					<div
						className={
							toggleState === 2
								? 'qualification__content qualification__content-active'
								: 'qualification__content'
						}
					>
						<div className='qualification__data'>
							<div>
								<h3 className='qualification__title'>
									Consultant at the Cornea, Glaucoma and Trauma units - Zarifa
									Aliyev National Eye Center
								</h3>
								<span className='qualification__subtitle'>
									Baku - Azerbaijan
								</span>
								<div className='qualification__calendar'>
									<i className='uil uil-calendar-alt'></i>
									05/2007 - till present time
								</div>
							</div>

							<div>
								<span className='qualification__rounder'></span>
								<span className='qualification__line'></span>
							</div>
						</div>

						<div className='qualification__data'>
							<div></div>

							<div>
								<span className='qualification__rounder'></span>
								<span className='qualification__line'></span>
							</div>
							<div>
								<h3 className='qualification__title'>
									Cornea Ant.Segment - IEH & LV Prasad Eye Institute
								</h3>
								<span className='qualification__subtitle'>
									Hyderabad - India
								</span>
								<div className='qualification__calendar'>
									<i className='uil uil-calendar-alt'></i>
									07/2007 - 09/2008
								</div>
							</div>
						</div>

						<div className='qualification__data'>
							<div>
								<h3 className='qualification__title'>
									Glaucoma Fellowship - Eye Infirmary & Training Complex
								</h3>
								<span className='qualification__subtitle'>
									Chittagong - Bangladesh
								</span>
								<div className='qualification__calendar'>
									<i className='uil uil-calendar-alt'></i>
									11/2006 - 05/2007
								</div>
							</div>

							<div>
								<span className='qualification__rounder'></span>
								<span className='qualification__line'></span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Qualification
