import React, { useState } from 'react'
import './services.css'

const Services = () => {
	const [toggleState, setToggleState] = useState(0)

	const toggleTab = index => {
		setToggleState(index)
	}
	return (
		<section className='services section' id='services'>
			<h2 className='section__title'>Xidmətlər</h2>
			<span className='section__subtitle'>Nə təklif edirəm</span>

			<div className='services__container container grid'>
				<div className='services__content'>
					<div>
						<i className='uil uil-eye services__icon'></i>
						<h3 className='services__title'>
							Cərrahiyyə <br /> İmplant
						</h3>
					</div>

					<span className='services__button' onClick={() => toggleTab(1)}>
						Ətraflı Baxın
						<i className='uil uil-arrow-right services__button-icon'></i>
					</span>

					<div
						className={
							toggleState === 1
								? 'services__modal active-modal'
								: 'services__modal'
						}
					>
						<div className='services__modal-content'>
							<i
								onClick={() => toggleTab(0)}
								className='uil uil-times services__modal-close'
							></i>

							<h3 className='services__modal-title'>Cataract</h3>
							<p className='services__modal-description'>
								Intracapsular Cataract Extraction (ICCE), non suture
								Extracapsular Cataract Extraction (ECCE)
							</p>

							<ul className='services__modal-services grid'>
								<li className='services__modal-service'>
									<i className='uil uil-check-circle services__modal-icon'></i>
									<p className='services__modal-info'>Phacoemulsificatin</p>
								</li>

								<li className='services__modal-service'>
									<i className='uil uil-check-circle services__modal-icon'></i>
									<p className='services__modal-info'>
										Scleral IOL fixation (SF IOL)
									</p>
								</li>

								<li className='services__modal-service'>
									<i className='uil uil-check-circle services__modal-icon'></i>
									<p className='services__modal-info'>
										Deep Anterior Lamellar Keratoplasty (DALK)
									</p>
								</li>

								<li className='services__modal-service'>
									<i className='uil uil-check-circle services__modal-icon'></i>
									<p className='services__modal-info'>
										Descemet Stripping Automated Endothelial Keratoplasty
										(DSAEK)
									</p>
								</li>

								<li className='services__modal-service'>
									<i className='uil uil-check-circle services__modal-icon'></i>
									<p className='services__modal-info'>
										Stripping Endothelial Keratoplasty (DSEK)
									</p>
								</li>
							</ul>
						</div>
					</div>
				</div>

				<div className='services__content'>
					<div>
						<i className='uil uil-microscope services__icon'></i>
						<h3 className='services__title'>
							Optometriya <br /> Oftalmologiya
						</h3>
					</div>

					<span onClick={() => toggleTab(2)} className='services__button'>
						Ətraflı Baxın
						<i className='uil uil-arrow-right services__button-icon'></i>
					</span>

					<div
						className={
							toggleState === 2
								? 'services__modal active-modal'
								: 'services__modal'
						}
					>
						<div className='services__modal-content'>
							<i
								onClick={() => toggleTab(0)}
								className='uil uil-times services__modal-close'
							></i>

							<h3 className='services__modal-title'>Glaucoma</h3>
							<p className='services__modal-description'>
								Penetrating: Trabeculectomy, Trabeculectomy +
								Trabeculotomy(pediatric) implantation, Express Shunt
								implantation, Nonpenetrating: Canaloplasty
							</p>

							<ul className='services__modal-services grid'>
								<li className='services__modal-service'>
									<i className='uil uil-check-circle services__modal-icon'></i>
									<p className='services__modal-info'>
										Baervelt glaucoma implant and Ahmed Glaucoma Valve
									</p>
								</li>

								<li className='services__modal-service'>
									<i className='uil uil-check-circle services__modal-icon'></i>
									<p className='services__modal-info'>
										Implantation of the Boston Keratoprosthesis Type I
									</p>
								</li>

								<li className='services__modal-service'>
									<i className='uil uil-check-circle services__modal-icon'></i>
									<p className='services__modal-info'>
										Boston Keratoprosthesis Type I + Ahmed Valve Implantation.
									</p>
								</li>

								<li className='services__modal-service'>
									<i className='uil uil-check-circle services__modal-icon'></i>
									<p className='services__modal-info'>DMEK + Phaco + IOL</p>
								</li>

								<li className='services__modal-service'>
									<i className='uil uil-check-circle services__modal-icon'></i>
									<p className='services__modal-info'>DSAEK + Phaco + IOL</p>
								</li>
							</ul>
						</div>
					</div>
				</div>

				<div className='services__content'>
					<div>
						<i className='uil uil-syringe services__icon'></i>
						<h3 className='services__title'>
							Müalicə <br /> Konsultasiya
						</h3>
					</div>

					<span onClick={() => toggleTab(3)} className='services__button'>
						Ətraflı Baxın
						<i className='uil uil-arrow-right services__button-icon'></i>
					</span>

					<div
						className={
							toggleState === 3
								? 'services__modal active-modal'
								: 'services__modal'
						}
					>
						<div className='services__modal-content'>
							<i
								onClick={() => toggleTab(0)}
								className='uil uil-times services__modal-close'
							></i>

							<h3 className='services__modal-title'>Cornea</h3>
							<p className='services__modal-description'>
								Optical Penetrating Keratoplasty (PK), Tectonic PK, Therapeutic
								PK,Descemet Membrane Endothelial Keratoplasty (DMEK),
								Implantation of the Boston Keratoprosthesis Type I, PTK, PRK,
								LASIK, Femto - LASIK
							</p>

							<ul className='services__modal-services grid'>
								<li className='services__modal-service'>
									<i className='uil uil-check-circle services__modal-icon'></i>
									<p className='services__modal-info'>
										Trabeculectomy + Phaco+IOL
									</p>
								</li>

								<li className='services__modal-service'>
									<i className='uil uil-check-circle services__modal-icon'></i>
									<p className='services__modal-info'>
										Baervelt glaucoma implant / Ahmed Glaucoma{' '}
									</p>
								</li>

								<li className='services__modal-service'>
									<i className='uil uil-check-circle services__modal-icon'></i>
									<p className='services__modal-info'>
										Valve implantation + Phaco+IOL
									</p>
								</li>

								<li className='services__modal-service'>
									<i className='uil uil-check-circle services__modal-icon'></i>
									<p className='services__modal-info'>
										Express Shunt implantation + Phaco+IOL
									</p>
								</li>

								<li className='services__modal-service'>
									<i className='uil uil-check-circle services__modal-icon'></i>
									<p className='services__modal-info'>
										Phaco Canaloplasty+IOL, Penetrating Keratoplasty + ECCE+IOL
									</p>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Services
