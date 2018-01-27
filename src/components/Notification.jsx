import React from 'react';
import sound from '../assets/media/sound.mp3';

function Notification() {
	return (<audio src={ sound } id="push"></audio>)
}

export default Notification
