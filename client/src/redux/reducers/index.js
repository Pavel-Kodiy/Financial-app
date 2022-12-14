const reducer = (state, action) => {
	switch (action.type) {
		case 'UPDATE_DATA':
			return {
				...state,
				quotes: action.payload,
			};
		default:
			return state;
	}
};

export default reducer;
