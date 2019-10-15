//factory function
function createCircle(radius){
	  return {
	    radius, //equivalent to=>radius:radius,
	    draw() {
	        console.log('draw');
	    }
	    // equivalent to => draw: function(){
	    //                  		console.log('draw');
	    //                  		}
	  }; 
  }
  // returns object euivalent to 
  /*
	function createCircle(radius){
  		const circle = {
			radius:radius,
			draw : 	function(){
						console.log('draw');
					}
  		}====> is a circle object
  		return circle; ==>returns circle object
  	}; 
  
  */ 


/* 
so now we have factory function we can simply call this to create a circle object and 
pass 1 as the radius
*/
const circle1 = createCircle(1); 
console.log(circle1); 
console.log(circle1.radius);
console.log(circle1.draw()); 

const circle2 = createCircle(2); 
console.log(circle2);  
console.log(circle2.radius);
console.log(circle2.draw()); 
