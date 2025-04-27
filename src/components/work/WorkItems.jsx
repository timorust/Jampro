import React from 'react'

const WorkItems = ({ item }) => {
	return (
		<div className='work__card' key={item.id}>
			<img src={item.image} alt='pic_work' className='work__img' />

			<h3 className='work__title'>{item.title}</h3>

			{item.link ? (
				<a
					href={item.link}
					target='_blank'
					rel='noopener noreferrer'
					className='work__button'
				>
					Demo <i className='bx bx-right-arrow-alt work__button-icon'></i>
				</a>
			) : (
				<button
					className='work__button'
					onClick={() => alert('Demo link not available')}
				>
					Demo <i className='bx bx-right-arrow-alt work__button-icon'></i>
				</button>
			)}
		</div>
	)
}

export default WorkItems
