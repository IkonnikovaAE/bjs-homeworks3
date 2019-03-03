//Задание 1
function getSolutions( a, b, c ) {
	let D = (Math.pow(b, 2)) - (4 * a * c);
	let x = [];
    switch (true) {
    	case (D < 0):
      	  break;
    	case (D == 0):
    	  x = [(-1*b)/(2*a)];
    	  break;
    	case (D > 0):
    	  x = [((-b)+Math.pow(D,0.5))/(2*a), ((-b)-Math.pow(D,0.5))/(2*a)];
    	  break;
    }
    return { roots: x, D: D };
}

function showSolutionsMessage( a, b, c ) {
	let result = getSolutions( a, b, c );
	console.log(`«Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}»`);
	console.log(`«Значение дискриминанта: ${result.D}»`);
	let rootsArray = result.roots;
	switch (true) {
    	case (result.D < 0):
    	  console.log("Уравнение не имеет вещественных корней");
    	  break;
    	case (result.D == 0):
       	  console.log(`Уравнение имеет один корень X₁ = ${rootsArray[0]}`);
    	  break;
    	case (result.D > 0):
    	 console.log(`Уравнение имеет два корня. X₁ = ${rootsArray[0]}, X₂ = ${rootsArray[1]}`);
    	  break;
    }
}
 showSolutionsMessage( 1, 2, 3 );
 showSolutionsMessage( 7, 20, -3 );
 showSolutionsMessage( 2, 4, 2 );

 //Задача 2
 function getPersonData( secretData ) {
 	let array = ["Родриго", "Эмильо"];
 	return {
 		firstName: array[secretData.aaa],
 		lastName: array[secretData.bbb]
 	};
 }

console.log(getPersonData({
	aaa: 0,
	bbb: 0
}))
console.log(getPersonData({
	aaa: 1,
	bbb: 0
}))
console.log(getPersonData({
	aaa: 0,
	bbb: 1
}))
console.log(getPersonData({
	aaa: 1,
	bbb: 1
}))

 //Задача 3
 function getAverageScore( data ) {	
 	let list = {};
 	let average = 0;
 	let quantity = 0;
 	for (let discipline in data) {
 		let value = data[discipline];
 		let averageMark = 0;
	    for (let i=0; i < value.length; i++) {
	    	averageMark = averageMark + value[i];
	    }
	    averageMark = (averageMark/value.length);
	    list[discipline] = averageMark;
	    quantity++;
	    average = average + averageMark;
 	}
 	list.average = average / quantity;
 	return list;
 }

 console.log(getAverageScore({
 	algebra: [2, 4, 5, 2, 3, 4],
 	geometry: [2, 4, 5],
 	russian: [3, 3, 4, 5]
 }))
