import React from 'react'

const Info = () => {
	return (
		<div className='about__info grid'>
			<div className='about__box'>
				<i class='bx bx-award about__icon'></i>

				<h3 className='about__title'>Təcrübə</h3>
				<span className='about__subtitle'>20 Il İşləyir</span>
			</div>

			<div className='about__box'>
				<i class='bx bx-briefcase-alt about__icon'></i>

				<h3 className='about__title'>Tamamlandı</h3>
				<span className='about__subtitle'>1000 əməliyyat</span>
			</div>

			<div className='about__box'>
				<i class='bx bx-support about__icon'></i>

				<h3 className='about__title'>Dəstək</h3>
				<span className='about__subtitle'>24/7 onlayn</span>
			</div>
		</div>
	)
}

export default Info
