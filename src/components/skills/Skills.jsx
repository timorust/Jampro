import React from 'react'
import Examination from './Examination'
import Operation from './Operation'
import './skills.css'

const Skills = () => {
	return (
		<section className='skills section' id='skills'>
			<h2 className='section__title'>Bacarıqlar</h2>
			<span className='section__subtitle'>Texniki səviyyəm</span>

			<div className='skills__container container grid'>
				<Examination />

				<Operation />
			</div>
		</section>
	)
}

export default Skills
