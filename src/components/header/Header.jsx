import React, { useState } from 'react'
import './header.css'

const Header = () => {
	/*=============== Change background header ===============*/

	window.addEventListener('scroll', function () {
		const header = document.querySelector('.header')

		if (this.scrollY >= 80) header.classList.add('scroll-header')
		else header.classList.remove('scroll-header')
	})
	/*=============== Toggle Menu ===============*/
	const [isToggle, setIsToggle] = useState(false)

	const [activeNav, setActiveNav] = useState('#home')
	return (
		<header className='header'>
			<nav className='nav container'>
				<a href='index.html' className='nav__logo'>
					Dr. Jamil
				</a>
				<div className={isToggle ? 'nav__menu show-menu' : 'nav__menu'}>
					<ul className='nav__list grid'>
						<li className='nav__item'>
							<a
								onClick={() => setActiveNav('#home')}
								href='#home'
								className={
									activeNav === '#home' ? 'nav__link active-link' : 'nav__link'
								}
							>
								<i className='uil uil-estate nav__icon'></i> Ev
							</a>
						</li>

						<li className='nav__item'>
							<a
								onClick={() => setActiveNav('#about')}
								href='#about'
								className={
									activeNav === '#about' ? 'nav__link active-link' : 'nav__link'
								}
							>
								<i className='uil uil-user nav__icon'></i> Haqqında
							</a>
						</li>

						<li className='nav__item'>
							<a
								onClick={() => setActiveNav('#skills')}
								className={
									activeNav === '#skills'
										? 'nav__link active-link'
										: 'nav__link'
								}
								href='#skills'
							>
								<i className='uil uil-file-alt nav__icon'></i>
								Bacarıqlar
							</a>
						</li>

						<li className='nav__item'>
							<a
								onClick={() => setActiveNav('#services')}
								className={
									activeNav === '#services'
										? 'nav__link active-link'
										: 'nav__link'
								}
								href='#services'
							>
								<i className='uil uil-briefcase-alt nav__icon'></i>
								Xidmətlər
							</a>
						</li>

						<li className='nav__item'>
							<a
								onClick={() => setActiveNav('#portfolio')}
								className={
									activeNav === '#portfolio'
										? 'nav__link active-link'
										: 'nav__link'
								}
								href='#portfolio'
							>
								<i className='uil uil-scenery nav__icon'></i> Qalereya
							</a>
						</li>

						<li className='nav__item'>
							<a
								className={
									activeNav === '#contact'
										? 'nav__link active-link'
										: 'nav__link'
								}
								href='#contact'
							>
								<i className='uil uil-message nav__icon'></i>
								Əlaqə
							</a>
						</li>
					</ul>

					<i
						class='uil uil-times nav__close'
						onClick={() => setIsToggle(!isToggle)}
					></i>
				</div>

				<div className='nav__toggle' onClick={() => setIsToggle(!isToggle)}>
					<i class='uil uil-apps'></i>
				</div>
			</nav>
		</header>
	)
}

export default Header
