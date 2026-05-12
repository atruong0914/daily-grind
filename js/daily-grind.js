// alert("hello from daily-grind.js!");
/*

One unique image, with appropriate and matching content in the alt tag. 
A paragraph or two of content that describes the daily item (paragraph must include the nake of the highlighted weekday)
A unique color that supports the image and paragraph of content


	pic - img src
	alt - the alt tag for the img
	desc - a description of the coffee
	day - the day of the week for the coffee
	color - color associated with coffee
	name - the name of the coffee

*/


let myDate = new Date();
let myDay = myDate.getDay();
let today = "";

switch(myDay){
    case 0:
        today = "Sunday";
    break;

    case 1:
        today = "Monday";
    break;

    case 2:
        today = "Tuesday";
        coffee = {
            name: "Bubble Tea",
            pic: "bubble-tea.jpg",
            alt: "a pic of yummy bubble tea.",
            color: "pink",
            day: "Tuesday",
            desc: "I like me some bubble tea!"
        };
    break;

    default:
        today = "Something went wrong!"

}

console.log(coffee);

alert(coffeeTemplate(coffee));

document.getElementById("coffee-cup").innerHTML = coffeeTemplate(coffee);

function coffeeTemplate(coffee){
    let myReturn = "";

    myReturn += `
<p>
    <img src="images/${coffee.pic}" alt="${coffee.alt}" id="coffee">
    <strong>${coffee.day}'s Coffee Special:</strong> ${coffee.day}'s daily coffee special is <strong>${coffee.name}</strong> ${coffee.desc}
</p>

    `;

    return myReturn;
}
