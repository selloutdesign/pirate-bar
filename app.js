//  --------- creating objects

var ingredientList = function(ingredients){
  this.ingredients = ingredients;
};

ingredientList.prototype.pickOne = function(){
  return this.ingredients[Math.floor(Math.random()*this.ingredients.length)];
};


var question = function(question){
  this.question = question;
};

var pantry = function(allIngred){
  this.listIngred = allIngred;
};

var person = function(){};

person.prototype.preferences = {
  strong: false,
  salty: false,
  bitter: false,
  sweet: false,
  fruity: false
};

var bartender = function(){};

bartender.prototype.questions = {
  strong : 'Do ye like yer drinks strong?',
  salty : 'Do ye like it with a salty tang?',
  bitter : 'Are ye a lubber who likes it bitter?',
  sweet : 'Would ye like a bit of sweetness with yer poison?',
  fruity : 'Are ye one for a fruity finish?',
}
bartender.prototype.pickOne = function(ingredList){
	return ingredList[Math.floor(Math.random()*ingredList.length)];
}

bartender.prototype.makeDrink = function(pref){
	var drink = [];
	if(pref.strong === true){
		 drink.push(strongList.pickOne());
	}
	if(pref.salty === true){
		 drink.push(saltyList.pickOne());
	}
	if(pref.bitter === true){
		 drink.push(bitterList.pickOne());
	}
	if(pref.sweet === true){
		 drink.push(sweetList.pickOne());
	}
	if(pref.fruity === true){
		 drink.push(fruityList.pickOne());
	}

	return drink;
}


// -------- Start initializing objects

var ingredients = ['Glug of rum', 'slug of whisky', 'splash of gin','Olive on a stick', 'salt-dusted rim', 'rasher of bacon','Shake of bitters', 'splash of tonic', 'twist of lemon peel','Sugar cube', 'spoonful of honey', 'splash of cola','Slice of orange', 'dash of cassis', 'cherry on top'];
var barPantry = new pantry(ingredients);

// for(var ingred in barPantry.listIngred){
//   console.log(barPantry.listIngred[ingred]);
// };



// for(question in bartender.questions){
// 	console.log(bartender.questions[question]);
// }


var strongList = new ingredientList(['Glug of rum', 'slug of whisky', 'splash of gin']);
var saltyList = new ingredientList(['Olive on a stick', 'salt-dusted rim', 'rasher of bacon']);
var bitterList = new ingredientList(['Shake of bitters', 'splash of tonic', 'twist of lemon peel']);
var sweetList = new ingredientList(['Sugar cube', 'spoonful of honey', 'splash of cola']);
var fruityList = new ingredientList(['Slice of orange', 'dash of cassis', 'cherry on top']);

// matt.makeDrink(josh.preferences);

//  console.log(fruityList.pickOne());
var matt = new bartender();
var josh = new person();
  // josh.preferences.strong = true;
console.log(josh.preferences);
matt.makeDrink(josh.preferences);


var printList = function(list){
  for(var i=0; i < list.ingredients.length; i++){
    $('.output').append(list.ingredients[i] + " ");
  }
}

printList(sweetList);

// for(var question in bartender.questions){
//   $('.questions').append
// }

// console.log(josh.preferences.propertyIsEnumerable('strong'));

// for( var key in josh.preferences){
//   console.log(key);
//   console.log(josh.preferences[key]);
// }

$(document).ready(function() {
	var showQuestion = function(questKey, questVal){
		var question = $('.templates .question').clone();
		var questText = question.find('p span');
		questText.text(questVal);
		// This doesn't work
		questText.id = "test"; 
		var checkBox = question.find('input .quest-box');

		// how to update checkBox name? -- JESSE

		$('.questions').prepend(question);
		
	}


	for(question in matt.questions){
		showQuestion(question, matt.questions[question])
	}

	$('.questions').on('click', '#submit', function(event) {
		event.preventDefault();
		/* Act on the event */
		if($("input[name='strong']:checked")){
			josh.preferences.strong = true;
		}
		matt.makeDrink(josh.preferences);
	});

	matt.makeDrink(josh.preferences);
});