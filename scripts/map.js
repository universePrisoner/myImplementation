Array.prototype.map = function(cb, scope) {
	if ( typeof this !== 'object') {
		throw new Error('It is not an array you have applied me to');
	}
	
	
	if ( typeof cb !== 'function' ) {
		throw new Error('Please define a callback function');
	}
	
	const localScope    = scope || undefined;
	const indexes       = Object.keys(this);
	const returnedArray = [];
	
	if ( ! this.length ) {
		return returnedArray;
	}
	
	for ( let k = 0; k < indexes.length; k++ ) {
		const key = indexes[k];
		
		if ( key === 'length' ) continue;
		
		if ( localScope ) {
			returnedArray.push(cb.call(localScope, this[key], key, this));
		} else {
			returnedArray.push(cb(this[key], key, this));
		}
	}
	return returnedArray;
}
