const array = [];

for (let i = 0; i < 101; i++) {
	array[i] = i+4;
}

array.pop();
array.splice(74,0,77);

console.log(array);

 const n = array.length;

for(let i=0;i<n;i++){
	if(array[i] === array[i+1]){
		console.log(array[i]);
	}
}