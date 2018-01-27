const clean = form => {
	Array.from(form.elements).map(input => input.value = "");
}

export default clean;