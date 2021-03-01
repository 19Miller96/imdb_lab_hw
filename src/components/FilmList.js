import React from 'react';
import Film from './Film.js';

const FilmList = ({ films }) => {
	const filmNodes = films.map((film) => {
		return (
			<li>
				<Film name={film.name} key={film.id} url={film.url}></Film>
			</li>
		);
	});

	return (
		<>
			<uL>{filmNodes}</uL>
		</>
	);
};

export default FilmList;
