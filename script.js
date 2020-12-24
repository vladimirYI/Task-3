'use strict';

function myForEach(arr, callback) {
	for (let i = 0; i < arr.length; i++) {
		callback(arr[i], i, arr);
	}
}


function createDebounceFunction(func, time) {
    let timeout;
    return function() {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            func.apply(this, arguments);
        }, time);
    }
}









