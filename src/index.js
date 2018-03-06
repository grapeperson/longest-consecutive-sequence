module.exports = function longestConsecutiveLength(array) {
  // your solution here
  array.sort(function(a, b){
		return a - b;
	});
  let count=1;
  let result=0;
	if (array.length === 0) {
		return 0;
	}
	for (let i = 0, length=array.length ; i < length; i++) {
    if(array[i]==array[i+1]-1){
      count++;
    }else{
      if(result<count)
      result=count;
      count=1;
    }
	}

	return result;
}
