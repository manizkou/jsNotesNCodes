//Constuctor Function

/* 
	Camel Notation is used for factory function and 
	Pascal Notation is used for Constructor Function by convention
*/

/*
	Camel Notation: camelNotation
	Pascal Notation : PascalNotation
*/


function Circle(radius){
	/*  in javascript we have a keyword 'this' 
		and 'this' is the reference to the object 
		that is executing this piece of code	  
	*/
	//	initially 'this' refer to an empty object (when no object is executing this piece of code)
	this.radius=radius;
	/*  with '.' notation we can access the property of an object
		- we can read a property 
		- we can set a property

		So, in this new empty object we want to add a property called radius and we set that
		to the radius argument we recieved.

		In Javascript objects are dynamic, once we create them we can always add additional properties
		or methods to them
		
		*so here we are adding a new property to an empty object
	*/
	// Similarly we use the same approach for adding a draw() method

	this.draw= function(){
					console.log('draw method constructerFunction');
				};
}

/*
	Finally in order to create circle object using this constructor function
	- we are gonna define a constant called circle
	- and we are gonna use another keyword 'new'
*/

	const circle = new Circle(1);
/*
	'new' operator creates an empty 
	 => something like this==>
	 			const x={};
	 			and 'this' will point to the given empty object which is x here
	 			so,
	 				const x = new Circle(1);
				gives

					const x = {
								radius:1
								which is equivalent to ==>
								(this.radius=radius -> this.radius=1 -> radius=1),
								
								draw:function(){
										console.log('draw method constructerFunction')
										}
								which is equivalent to ==>
								(this.draw=function(){console.log('draw method constructerFunction')})

								};	
*/


/*
	finally, 'new' operator will return the new object created using 'new' operator i.e const x 
	and also const circle from th Circle() function which looks like this
*/

/*
	function Circle(radius){
		this.radius=radius;
		this.draw= function(){
						console.log('draw method constructerFunction');
					};

		return this;<-- this happens under the hood
	}
*/