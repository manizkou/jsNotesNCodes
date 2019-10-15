// 'this' references the object that is executing the current function

/*
	if a FUNCTION is an part of an OBJECT we call that function => METHOD

	so if we have a method in an object:

		const x ={	
					name:'Harry',
					draw: function(){
							console.log(this.name);
							}
					}

	'this' in the draw() method refers to the object x itself.

	so 'this.name'==>'x.name'
*/

// method -> obj ==> if the function is method in an object 'this' references the object itself

// creating an object named video
	 const video = {
	 				title:'a',
	 				play:function(){
	 						console.log(this);
	 					}
	 				};
	 video.play();

	//  we can see from result 'this' refers to the object itself

	//again added the stop method to the video object
	 video.stop = function(){
	 				console.log(this);
	 			}
	//'this' refers to the object video again



/*
	Otherwise if that function is a regular function (which means its not part of an object)
	- 'this' references to the global object which is -> window object in browsers and global in node
*/

// function -> global( window, global)


	function playVideo(){
		console.log(this);
	}
	//here 'this' refers to the window object 

/*
	In constructor function 'this' will reference to the object that is executing the current function 
*/

	function Video(title){
		this.title=title;
		console.log(this);
	}

	const v = new Video('ConstructorFunction');

//

/*	const video ={

			title : 'a',
			tags : ['a','b','c']

			showTags(){
				this.tags.forEach(
					// we pass here a call back function
					function(tag){
					//in each iteration this function will get tag and we can display the tag on the console
					console.log(tag);
					}
				)
			}
	}

	//Finally lets call video's showTags() function
	video.showTags();
*/

// But what if we want to get the title the video next to each tag

const video ={

			title : 'a',
			tags : ['a','b','c']

			showTags(){
				this.tags.forEach(
					function(tag){
					
					/*console.log(this.title, tag);*/ //==>results this.title-> undefined
					
					/*==> in the statement 'this' denotes window object/global object since showTags() is the only
					function i.e. method of the video object */

					/* 
						solution for this is that--> forEach method has two parameters:
						- the first one is the callback function 
						- the second one is and object / 
						(thisArg?:any)-->An object to which the 'this' keyword can refer in callback function
					*/
					console.log(this.title,tag);

					}, this);
					/*
						=>now 'this' above refers to the current video object which passes 
						to callback function above

						in this way we can access title in the callback function given
						above by using 'this.title' 
					*/
			}
	}













