const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
 const maxSum = Number(n);
	if (!arr || arr.length === 0) {
        return [];
    }
	const result = [];
	let currentSubarray = [];
    let currentSum = 0;
	for (const element of arr) {
		const potentialSum = currentSum + element;
		if (potentialSum <= maxSum) {
			currentSubarray.push(element);
            currentSum = potentialSum;
        } else {
			if (currentSubarray.length > 0) {
                result.push(currentSubarray);
            }
			currentSubarray = [element];
            currentSum = element;
        }
    }
	if (currentSubarray.length > 0) {
        result.push(currentSubarray);
    }

    return result;
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
