(function() {
	Array.prototype.forEach = function(cb, scope) {
		if ( typeof this !== 'object') {
			throw new Error('It is not an array you have applied me to');
		}
		
		if ( ! this.length ) {
			return undefined;
		}
		
		if ( typeof cb !== 'function' ) {
			throw new Error('Please define a callback function');
		}
		
		const localScope = scope || undefined;
		const indexes    = Object.keys(this);
		
		for ( let k = 0; k < indexes.length; k++ ) {
			const key = indexes[k];
			
			if ( key === 'length' ) continue;
			
			if ( localScope ) {
				cb.call(localScope, this[key], key, this);
			} else {
				cb(this[key], key, this);
			}
			
		}
		
		return undefined;
	}
	
})();

