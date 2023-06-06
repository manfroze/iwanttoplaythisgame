const items = {
	want: {
		log: "You want to play this game.",
		idea: "The idea of wanting to play this game",
		thing: "The material reification of the act of wanting to play this game",
		action: "want",
		dust: "Will dust",
		machineCostA: [10, "ideas", "will"],
		machineCostB: [25, "dusts", "want"],		
		type: "impure",
		purified: "will",
		machine: "Heart Complex",
	},
	mentalize: {
		log: "You mentalized something.",
		idea: "The idea of mentalizing something",
		thing: "The material reification of the act of mentalizing",
		action: "mentalize",
		dust: "Mind dust",
		machine: "Mind machine",
		machineCostA: [1000, "ideas", "recursion"],
		machineCostB: [10, "dusts", "mentalize"],
		type: "impure",
		purified: "thought",
		machine: "Mind Palace",
		clicker: true,
	},
	reify: {
		log: "You reified something.",
		logTooMany: "You reified a lot of stuff.",
		idea: "The idea of reifying something",
		thing: "The material reification of the act of reifying",
		action: "reify",
		dust: "Material dust",
		machineCostA: [25, "ideas", "idealSubstance"],
		machineCostB: [10, "dusts", "pulverize"],
		class: "reifyThings",
		type: "impure",
		purified: "primaMateria",
		machine: "Matter Lab",
		clicker: true,
	},
	pulverize: {
		log: "You pulverized something.",
		logTooMany: "You pulverized a lot of stuff.",
		idea: "The idea of pulverizing something",
		thing: "The material reification of the act of pulverizing",
		action: "pulverize",
		dust: "Dust dust",
		type: "impure",
		purified: "shadow",
		clicker: true,
	},
	purify: {
		log: "You purified something.",
		idea: "The idea of purifying something",
		thing: "The material reification of the act of purifying",
		dust: "Pure dust",
		type: "impure",
		purified: "purity",
		clicker: true,
	},
	machineU: {
		log: "You have unlocked a machine.",
		idea: "The idea that you have unlocked a machine",
		type: "impure",
		rarity: "unique",
		purified: "technology"
	},
	unlock: {
		log: "You have unlocked something.",
		idea: "The idea that you have unlocked something",
		type: "impure",
		rarity: "unique",
		purified: "progress"
	},
	respect: {
		log: "You have pressed F to pay respect.",
		idea: "Respect",
		type: "pure"
	},
	mind: {
		idea: "Mind",
		type: "pure",
		generator: true,
	},
	strength: {
		idea: "Strength",
		type: "pure",
		generator: true,
	},
	recursion: {
		idea: "Recursion",
		type: "pure"
	},
	idealSubstance: {
		idea: "Ideal Substance",
		type: "pure"
	},
	matter: {
		thing: "Matter",
		type: "pure",
		generator: true,
	},
	thought: {
		idea: "Thought",
		type: "pure"
	},
	primaMateria: {
		idea: "Prima Materia",
		type: "pure"
	},
	shadow: {
		idea: "Shadow",
		type: "pure"
	},
	entropy: {
		idea: "Entropy",
		type: "pure"
	},
	purity: {
		idea: "Purity",
		type: "pure"
	},
	will: {
		idea: "Will",
		type: "pure",
		generator: true,
	},
	technology: {
		idea: "Technology",
		type: "pure"
	},
	progress: {
		idea: "Progress",
		type: "pure"
	},
	fortitude: {
		idea: "Fortitude",
		ingredients: ["mind", "strength"],
		type: "pure",
		subtype: "alchemified"
	},
	madness: {
		idea: "Madness",
		ingredients: ["mind", "recursion"],
		type: "pure",
		subtype: "alchemified"
	},
	loyalty: {
		idea: "Loyalty",
		ingredients: ["strength", "respect"],
		type: "pure",
		subtype: "alchemified"
	},
	conviction: {
		idea: "Conviction",
		ingredients: ["strength", "thought"],
		type: "pure",
		subtype: "alchemified"
	},
	selfEsteem: {
		idea: "Self Esteem",
		ingredients: ["recursion", "respect"],
		type: "pure",
		subtype: "alchemified"
	},
	problemSolving: {
		idea: "Problem Solving",
		ingredients: ["recursion", "thought"],
		type: "pure",
		subtype: "alchemified"
	},
	divinity: {
		idea: "Divinity",
		ingredients: ["recursion", "purity"],
		type: "pure",
		subtype: "alchemified"
	},
	idea: {
		idea: "Idea",
		ingredients: ["idealSubstance", "thought"],
		type: "pure",
		subtype: "alchemified"
	},
	friendship: {
		idea: "Friendship",
		ingredients: ["respect", "thought"],
		type: "pure",
		subtype: "alchemified"
	},
	faith: {
		idea: "Faith",
		ingredients: ["respect", "primaMateria"],
		type: "pure",
		subtype: "alchemified"
	},
	spark: {
		idea: "Spark",
		ingredients: ["thought", "primaMateria"],
		type: "pure",
		subtype: "alchemified"
	},
	philosophy: {
		idea: "Philosophy",
		ingredients: ["thought", "purity"],
		type: "pure",
		subtype: "alchemified"
	},
	void: {
		idea: "Void",
		ingredients: ["primaMateria", "shadow"],
		type: "pure",
		subtype: "alchemified"
	},
	creation: {
		idea: "Creation",
		ingredients: ["primaMateria", "purity"],
		type: "pure",
		subtype: "alchemified"
	},
	evil: {
		idea: "Evil",
		ingredients: ["shadow", "will"],
		type: "pure",
		subtype: "alchemified"
	},
	death: {
		idea: "Death",
		ingredients: ["shadow", "entropy"],
		type: "pure",
		subtype: "alchemified"
	},
	heroism: {
		idea: "Heroism",
		ingredients: ["purity", "strength"],
		type: "pure",
		subtype: "alchemified"
	},
	dementia: {
		idea: "Dementia",
		ingredients: ["entropy", "mind"],
		type: "pure",
		subtype: "alchemified"
	},
	destruction: {
		idea: "Destruction",
		ingredients: ["strength", "entropy"],
		type: "pure",
		subtype: "alchemified"
	},
	selfDoubt: {
		idea: "Self Doubt",
		ingredients: ["respect", "shadow"],
		type: "pure",
		subtype: "alchemified"
	},
	awe: {
		idea: "Awe",
		ingredients: ["respect", "purity"],
		type: "pure",
		subtype: "alchemified"
	},
	bigBang: {
		idea: "Big Bang",
		ingredients: ["idealSubstance", "entropy"],
		type: "pure",
		subtype: "alchemified"
	},
	mentAll: {
		log: "You collapsed something into a generic idea.",
	},
}

var ideas = {};
var things = {};
var dusts = {};

const itemCounter = {
	idea: ideas,
	thing: things,
	dust: dusts
}

const buttons = {
	want: {
		label: "I want to play this game",
		action: "want",
	},
	mentalize: {
		label: "Mentalize",
		action: "mentalize",
	},
	reify: {
		label: "Reify",
		action: "reify",
	},
	pulverize: {
		label: "Pulverize",
		action: "pulverize",
	},
	mentAll: {
		label: "MentAll",
		action: "mentalizeAll",
	},
	reifyMax: {
		label: "ReifyMax",
		action: "reifyMax",
	},
	pulverizeMax: {
		label: "PulverizeMax",
		action: "pulverizeMax",
	},
	mentalizeMax: {
		label: "MentalizeMax",
		action: "mentalizeMax",
	},
	purifyMax: {
		label: "PurifyMax",
		action: "purifyMax",
	},
	autoPulverize: {
		label: "AutoPulverize",
		action: "autoPulverize",
	},
	autoMentalize: {
		label: "AutoMentalize",
		action: "autoMentalize",
	},
	autoReify: {
		label: "AutoReify",
		action: "autoReify",
	},
	autoPurify: {
		label: "AutoPurify",
		action: "autoPurify",
	},
}

const nextAction = {
	ideas: "reify",
	things: "pulverize"
}

const buyables = {
	mindConv: {
		class: "conv",
		cost: [1, "dusts", "mentalize"],
		effect: [5, "ideas", "mind"],
		machine: "mentalize",
	},
	matterConv: {
		class: "conv",
		cost: [1, "dusts", "reify"],
		effect: [10, "things", "matter"],
		machine: "reify",
	},
	willConv: {
		class: "conv",
		cost: [1, "dusts", "want"],
		effect: [5, "ideas", "will"],
		machine: "want",
	},
	strengthConv: {
		class: "conv",
		cost: [1, "dusts", "want"],
		effect: [5, "ideas", "strength"],
		machine: "mentalize",
	},	
	mentAllUnlock: {
		name: "Unlock MentAll",
		cost: [10, "dusts", "mentalize"],
		class: "unlock",
		machine: "mentalize",
	},
	autoMindUnlock: {
		name: "Unlock MindGen",
		cost: [25, "dusts", "mentalize"],
		class: "unlock",
		subclass: "submachine",
		machine: "mentalize",
		unlocks: "autoMind",
	},
	autoStrengthUnlock: {
		name: "Unlock StrengthGen",
		cost: [35, "dusts", "want"],
		class: "unlock",
		subclass: "submachine",
		machine: "mentalize",
		unlocks: "autoStrength",
	},
	autoWillUnlock: {
		name: "Unlock WillGen",
		cost: [40, "dusts", "want"],
		class: "unlock",
		subclass: "submachine",
		machine: "want",
		unlocks: "autoWill",
	},
	purifyMaxUnlock: {
		name: "Unlock PurifyMax",
		class: "unlock",
		subclass: "button",
		cost: [250, "ideas", "idealSubstance"],
		machine: "mentalize",
	},	
	reifyMaxUnlock: {
		name: "Unlock ReifyMax",
		class: "unlock",
		subclass: "button",
		cost: [10, "dusts", "reify"],
		machine: "reify",
	},
	pulverizeMaxUnlock: {
		name: "Unlock PulverizeMax",
		class: "unlock",
		subclass: "button",
		cost: [25, "dusts", "pulverize"],
		machine: "reify",
	},
	mentalizeMaxUnlock: {
		name: "Unlock MentalizeMax",
		class: "unlock",
		subclass: "button",
		cost: [25, "ideas", "thought"],
		machine: "mentalize",
	},
	autoMatterUnlock: {
		name: "Unlock MatterGen",
		cost: [30, "dusts", "reify"],
		class: "unlock",
		subclass: "submachine",
		machine: "reify",
		unlocks: "autoMatter",
	},
	autoReifyUnlock: {
		name: "Unlock AutoReify",
		cost: [25, "ideas", "primaMateria"],
		class: "unlock",
		subclass: "button",
		machine: "want",
	},
	autoPurifyUnlock: {
		name: "Unlock AutoPurify",
		cost: [50, "ideas", "purity"],
		class: "unlock",
		subclass: "button",
		machine: "want",
	},
	autoMentalizeUnlock: {
		name: "Unlock AutoMentalize",
		cost: [100, "ideas", "thought"],
		class: "unlock",
		subclass: "button",
		machine: "want",
	},
	autoPulverizeUnlock: {
		name: "Unlock AutoPulverize",
		cost: [25, "ideas", "shadow"],
		class: "unlock",
		subclass: "button",
		machine: "want",
	},
	alchemyUnlock: {
		name: "Unlock Alchemizer",
		class: "unlock",
		subclass: "submachine",
		cost: [1000, "dusts", "purify"],
		machine: "reify",
		unlocks: "alchemizer",
	}	
}

const subMachines = {
	autoMind: {
		name: "MindGen",
		machine: "mentalize",
		type: "idea",
		token: "mind",
		class: "generator"
	},
	autoMatter: {
		name: "MatterGen",
		machine: "reify",
		type: "thing",
		token: "matter",
		class: "generator"	
	},
	autoStrength: {
		name: "StrengthGen",
		machine: "mentalize",
		type: "idea",
		token: "strength",
		class: "generator"	
	},
	autoWill: {
		name: "WillGen",
		machine: "want",
		type: "idea",
		token: "will",
		class: "generator"	
	},
	alchemizer: {
		name: "Alchemizer",
		machine: "reify",
		class: "alchemizer"	
	},
}

const fuelCost = {
	mind: [10, "dusts", "mentalize"],
	matter: [10, "dusts", "reify"],
	strength: [10, "dusts", "want"],
	will: [10, "dusts", "want"],
}

// VARIABLES //

function startVar(){

	$.each(itemCounter, function(type, types){
		$.each(items, function(id, item){
			if(item[type]){
				types[id] = 0
			}
		});
	});

	impureItems = {};
	$.each(itemCounter, function(type, types){
		impureItems[type] = [];
		$.each(items, function(id, item){
			if(item.type == "impure"){
				impureItems[type].push(id);
			}
		});
	});

	ideas.mind = 300;
	ideas.strength = 300;
	things.matter = 300;

	itemUnlock = {}

	$.each(itemCounter, function(type, types){
		itemUnlock[type+'s'] = {};
		$.each(items, function(id, item){
			if(item[type]){
				itemUnlock[type+'s'][id] = "locked"
			}
		});
	});

	activeLogCounter = 0;

	showStatus = {
		log: "locked",
		ideas: "locked",
		things: "locked",
		machines: "locked"
	}

	machineStatus = {}
	$.each(items, function(id){
		if(items[id].machine){
			machineStatus[id] = "locked";
		}
	});

	buyableStatus = {}
	$.each(buyables, function(id){
		buyableStatus[id] = "locked";
	})

	clickerStatus = {}
	$.each(items, function(id){
		if(items[id].clicker){
			clickerStatus[id] = "off";
		}
	});

	power = {}
	fuelGauge = {}
	fuelGaugeSize = {}

	$.each(items, function(id){
		if(items[id].generator){
			power[id] = 0;
			fuelGauge[id] = 0;
			fuelGaugeSize[id] = 1000;
		}
	});

	power.alchemy = 1;

	logCount = 0;

	state = {
		logCount: logCount,
		ideas: ideas,
		things: things,
		dusts: dusts,
		machineStatus: machineStatus,
		showStatus: showStatus,
		clickerStatus: clickerStatus,
		buyableStatus: buyableStatus,
		power: power,
		fuelGauge: fuelGauge,
		fuelGaugeSize: fuelGaugeSize,
	}
}

function updateState(){
	machineStatus = state.machineStatus;
	showStatus = state.showStatus;
	buyableStatus = state.buyableStatus;
	clickerStatus = state.clickerStatus;
	things = state.things;
	ideas = state.ideas;
	dusts = state.dusts;
	power = state.power;
	fuelGauge = state.fuelGauge;
	fuelGaugeSize = state.fuelGaugeSize;
}

// LOCAL STORAGE //

function updateLocalStorage(){
	localStorage.setItem('gameState', JSON.stringify(state));
}

function loadState(){
	if (localStorage.getItem('gameState')) {
		state = JSON.parse(localStorage.getItem('gameState'))
		updateState();
	};
}

/*$( window ).on("unload", function() {
	updateLocalStorage();
});*/

// READY //

$( document ).ready(function() {
	startup();
});

function startup(){
	startVar();
	loadState();
	show();
	buildMachines();
	buildAllItems();
	buildBuyables();
	button("#header", null, "want");
	buyablesClick();
	machineUnlockClick();
	powerStart();
	clickStatus();
	clickerStart();
	clickStatus();
	autoIncrease();
	logClear();
	impureStatus();
}

function powerStart() {
	$.each(power, function(token){
		updatePowerCounter(token);
		updateFuelGaugeCounter(token);
		spendFuel(token);
		$('.subMachine.'+token+' .addFuel').on( "click", function() {
			powerIncrease(token);
		});
	});
}

var autoClickerInterval = {
	reify: null,
	mentalize: null,
	pulverize: null
};

function clickerStart() {
	$.each(clickerStatus, function(token){
		if(clickerStatus[token] == "on") {
			autoClickerPower(token, "on");
		} else if (clickerStatus[token] == "off"){
			autoClickerPower(token, "off");
		}
	});
}

function autoClickerPower(token, state){
	if (state == "on"){
		clickerStatus[token] = "on";
		$('.clicker.'+token).addClass("on").removeClass("off");
		autoClickerInterval[token] = setInterval(() => {autoClicker(token)}, 1000);
	} else if (state == "off"){
		clickerStatus[token] = "off";
		$('.clicker.'+token).addClass("off").removeClass("on");
		clearInterval(autoClickerInterval[token]);		
	}
}

function clickStatus(){
	$.each(clickerStatus, function(token){
		$('.clicker.'+token).on("click", function() {
			if(clickerStatus[token] == "on"){
				autoClickerPower(token, "off");
			} else if (clickerStatus[token] == "off"){
				autoClickerPower(token, "on");
			}
		});
	});
}

function clicker(appendTo, buttonType, type){
	clickStatus();
	$(appendTo).append('<div class="clicker button off '+buttonType+' '+type+'">'+buttons[buttonType].label+'</div></div>')
	clickStatus();
}

function autoClicker(token){
	if (token == "reify"){
		reifyMax();
		pay("ideas", "will", 1);
		if(ideas.will == 0){
			autoClickerPower(token, "off");
		}	
	}
	if (token == "pulverize"){
		pulverizeMax();
		pay("ideas", "will", 1);
		if(ideas.will == 0){
			autoClickerPower(token, "off");
		}	
	}
	if (token == "mentalize"){
		mentalizeMax();
		pay("ideas", "will", 1);
		if(ideas.will == 0){
			autoClickerPower(token, "off");
		}	
	}
	if (token == "purify"){
		purifyMax();
		pay("ideas", "will", 1);
		if(ideas.will == 0){
			autoClickerPower(token, "off");
		}	
	}		
}

function buyablesClick(){
	$.each(buyables, function(id){
		$('#' + id).on( "click", function() {
			buyable(id);
		});
	});
}

function machineUnlockClick(){
	$.each(items, function(id, item){
		if(item.machine){
			$('.machineUnlock.'+id).on( "click", function() {
				unlockMachine(id);
			});
		}
	});
}

function show(){
	$.each(showStatus, function(id){
		if(showStatus[id] == "unlocked"){
			$('#'+id).show();
		} else {
			$('#'+id).hide();
		}
	});
}

function buildBuyables(){
	$.each(buyableStatus, function(id){
		if (buyableStatus[id] == "unlocked"){
			$('.buyable.'+id).hide();
			if (id == "mentAllUnlock"){
				button("#log .header", null, "mentAll")
				$(".button.mentAll").append('<span class="counter"> (<span class="number">'+activeLogCounter+'</span>)</span>')
			}
			if (id == "reifyMaxUnlock"){
				button("#ideas .header", null, "reifyMax")
			}
			if (id == "pulverizeMaxUnlock"){
				button("#things .header", null, "pulverizeMax")
			}
			if (id == "mentalizeMaxUnlock"){
				button("#log .header", null, "mentalizeMax")
			}
			if (id == "purifyMaxUnlock"){
				button("#ideas .header", null, "purifyMax")
			}
			if (id == "autoMentalizeUnlock"){
				clicker("#log .header", "autoMentalize", "mentalize")
			}
			if (id == "autoReifyUnlock"){
				clicker("#ideas .header", "autoReify", "reify")
			}	
			if (id == "autoPurifyUnlock"){
				clicker("#ideas .header", "autoPurify", "purify")
			}	
			if (id == "autoPulverizeUnlock"){
				clicker("#things .header", "autoPulverize", "pulverize")
			}			

			if(buyables[id].subclass == "submachine"){
				$('#'+buyables[id].unlocks).show();
			}
		}
	});
}

function buildMachines(){
	$.each(items, function(token){
		if (items[token].machine){
			$('#machines .content').append('<div class="machineUnlock box '+token+'" style="display:none;"><div class="title">Unlock '+items[token].machine+'</div><div class="cost"><span class="'+items[token].machineCostA[2]+'">'+items[token].machineCostA[0]+' '+items[items[token].machineCostA[2]][items[token].machineCostA[1].slice(0, -1)]+'</span>, <span class="'+items[token].machineCostB[2]+'">'+items[token].machineCostB[0]+' '+items[items[token].machineCostB[2]][items[token].machineCostB[1].slice(0, -1)]+'</span></div></div>')
			$('#machines .content').append('<div class="machine box '+token+'" style="display:none;"><div class="title">'+items[token].machine+'</div></div>')
			$('.machine.'+token).append('<div class="container"><div class="stripContainer"><div class="strip small"></div><div class="strip big"></div></div></div>');
			$.each(buyables, function(buyable){
				if(buyables[buyable].machine == token) {
					if (buyables[buyable].class == "conv") {
						$('.machine.'+token+' .strip.small').append('<div id="'+buyable+'" class="tile small buyable '+buyable+'"><span class="name '+buyables[buyable].effect[2]+'">+'+buyables[buyable].effect[0]+' '+items[buyables[buyable].effect[2]][buyables[buyable].effect[1].slice(0, -1)]+'</span><span class="cost '+buyables[buyable].cost[2]+'">'+buyables[buyable].cost[0]+' '+items[buyables[buyable].cost[2]][buyables[buyable].cost[1].slice(0, -1)]+'</span></div>');
					} else if (buyables[buyable].class == "unlock") {
						$('.machine.'+token+' .strip.big').append('<div id="'+buyable+'" class="tile buyable '+buyable+'"><span class="name">'+buyables[buyable].name+'</span><span class="cost '+buyables[buyable].cost[2]+'">'+buyables[buyable].cost[0]+' '+items[buyables[buyable].cost[2]][buyables[buyable].cost[1].slice(0, -1)]+'</span></div>');
					}
				}
			});

			$.each(subMachines, function(sub){
				if(subMachines[sub].machine == token && subMachines[sub].class == "generator") {
					$('.machine.'+token+' .container').append('<div id="'+sub+'" class="subMachine '+sub+' '+subMachines[sub].token+'" style="display:none;"><div class="collapse"></div><div class="name">'+subMachines[sub].name+'</div><div class=""><div class="text">+<span class="info"></span> '+items[subMachines[sub].token][subMachines[sub].type]+'/s</div><div class="text"><span class="fuel"></span>/<span class="gauge"></span>  '+items[fuelCost[subMachines[sub].token][2]][fuelCost[subMachines[sub].token][1].slice(0, -1)]+'</div><div class="gaugeDraw"><div class="fuelDraw"></div></div><div class="button addFuel">Add '+fuelCost[subMachines[sub].token][0]+' '+items[fuelCost[subMachines[sub].token][2]][fuelCost[subMachines[sub].token][1].slice(0, -1)]+'</div></div></div>');

				} else if(subMachines[sub].machine == token && subMachines[sub].class == "alchemizer") {
					$('.machine.'+token+' .container').append('<div id="'+sub+'" class="subMachine '+sub+' '+subMachines[sub].token+'" style="display:none;"><div class="collapse"></div><div class="name">'+subMachines[sub].name+'</div><select id="selector1" class="selector"></select> + <select id="selector2" class="selector"></select><div id="result">???</div><div id="alchemize" class="button">Alchemize</div></div>');
					populateSelector('#selector1');
					populateSelector('#selector2');

					$( ".selector" ).on( "change", function() {
						let rec = recipe($("#selector1").val(), $("#selector2").val());
						if(rec){
							if(items[rec].idea){
								$('#result').html(items[rec].idea)
							}
							if(items[rec].thing){
								$('#result').html(items[rec].thing)
							}
							$('#result').removeClass().addClass(rec)
						} else {
							$('#result').removeClass().html("???")
						}
					} );

					$('#alchemize').on("click", function(){
						alchemy(recipe($("#selector1").val(), $("#selector2").val()))
					})
				}
			});

			if(machineStatus[token] == "unlocked"){
				$('.machine.'+token).show();
				$('.machineUnlock.'+token).hide();
			} else {
				$('.machine.'+token).hide();
				$('.machineUnlock.'+token).show();			
			}
		}
	});

$('.subMachine .collapse').click(function() {
	$(this).parent().toggleClass("collapsed");
});
}

function populateSelector(selector){
	$.each(itemCounter, function(type){
		$.each(items, function(id, item) {
			if(item[type] && item.type == "pure" && item.subtype != "alchemified"){
				$(selector).append($("<option />").val(id).text(item[type]));
			}
		});
	});
}

/* GENERATORS */

function updatePowerCounter(token){
	$('.subMachine.'+token+' .info').html(Math.floor(power[token]));
	if (power[token] > 0){	
		$('.item.'+token+' .rate').show();
		$('.item.'+token+' .rate .number').html(Math.floor(power[token]));
	} else {
		$('.item.'+token+' .rate').hide();	
	}
}

function updateFuelGaugeCounter(token){
	var fuelPercent = fuelGauge[token] / fuelGaugeSize[token] * 100;
	$('.subMachine.'+token+' .fuel').html(fuelGauge[token]);
	$('.subMachine.'+token+' .gauge').html(fuelGaugeSize[token]);
	$('.subMachine.'+token+' .fuelDraw').css("width", fuelPercent + "%");
}

function powerIncrease(token){
	addFuel(token, fuelCost[token][1], fuelCost[token][2], fuelCost[token][0]);
}

function addFuel(token, typeCost, tokenCost, amount){
	if (fuelGauge[token] + amount < fuelGaugeSize[token] && pay(typeCost, tokenCost, amount) == true){
		fuelGauge[token] = fuelGauge[token] + amount;
		updateFuelGaugeCounter(token);
	}
}

function spendFuel(token){
	setInterval(function(){
		if(fuelGauge[token] > 0){
			fuelGauge[token]--;
			power[token] = fuelGauge[token]*10;
			updateFuelGaugeCounter(token);
			updatePowerCounter(token);
		}
	}, 1000) 
}

function autoIncrease(){
	setInterval(function(){
		acquire("ideas", "mind", power.mind);
		acquire("things", "matter", power.matter);
		acquire("ideas", "strength", power.strength);
		acquire("ideas", "will", power.will);
	}, 1000) 
}

function logClear(){
	setInterval(function(){
		$('.item.logMessage.inactive').fadeOut();
	}, 10000) 
}

function impureStatus(){
	//$('.item .button').on("click", function(){
		$.each(impureItems, function(type, types){
			$.each(types, function(id, item){
				if (itemCounter[type][item] == 0){
					$('.item.'+type+'s.'+item).fadeOut();
				} else {
					$('.item.'+type+'s.'+item).show();	
				}
			})
		});
	//});
}

/* ALCHEMY */

function recipe(...ingredients) {
	for (const [itemKey, item] of Object.entries(items)) {
		if (
			item.subtype == "alchemified" &&
			ingredients.every(ingredient => item.ingredients.includes(ingredient))
			) {
			return itemKey
	}
}
}

function alchemy(item){
	if (items[item].subtype == "alchemified"){
		if(pay("ideas", items[item].ingredients[0], power.alchemy) && pay("ideas", items[item].ingredients[1], power.alchemy)){
			acquire("ideas", item, power.alchemy)
		}
	}
}

/* MAX */

function purifyMax(){
	$.each(ideas, function(id, amount){
		if(amount > 0 && items[id].type == "impure"){
			logMessage("purify");
			acquire("ideas", items[id].purified, amount);
			pay("ideas", id, amount)
		}
	});
}

function reifyMax(){
	$.each(ideas, function(id, amount){
		if(amount > 0 && items[id].type == "impure" && items[id].rarity != "unique"){
			reify(id, amount);
		}
	});
}

function pulverizeMax(){
	$.each(things, function(id, amount){
		if(amount > 0 && items[id].type == "impure"){
			pulverize(id, amount);
		}
	});
}

function mentalizeMax(){
	$.each(items, function(id, name){
		amount = $('.logMessage.active.'+id).length;
		if(amount > 0){
			mentalize(id, null, amount);
		}
		$('.logMessage.active.'+id+' .button').remove();
		$('.logMessage.active.'+id).addClass("inactive").removeClass("active");
		activeLogCounter = activeLogCounter - amount;
	});
}

function buildAllItems(){
	$.each(itemCounter, function(key, type){
		$.each(type, function(id){
			if(type[id] != 0){
				itemBuild(key+'s', id);	
			}
		});
	});
}

function pay(type, token, price){
	if (window[type][token] >= price){
		window[type][token] = window[type][token] - price;
		updateCounter(type, token);
		if(items[token].type == "impure"){
			if(window[type][token] <= 0){
				window[type][token] = 0;
				//$('.'+type+'.'+token).remove();
			}
		} return true;
	} else {
		return false;
	}
}

function acquire(type, item, amount){
	if (itemUnlock[type][item] == "locked" && window[type][item] == 0){
		itemUnlock[type][item] = "unlocked";
		itemBuild(type, item);
	}
	window[type][item] = window[type][item] + amount;
	updateCounter(type, item);
}

function itemBuild(type, id){
	if (type != "dusts"){
		append = '#'+type+' #'+items[id].type;
	} else if (type == "dusts"){
		append = '#things #dusts'
	}
	$(append).append('<div class="item '+type+' '+id+'"><span class="name">' + items[id][type.slice(0, -1)] + ' </span><span class="counter"><span class="rate" style="display:none">+<span class="number"></span>/s</span> <span class="amount"></span></span></div>');
	if (items[id].type == "impure" && type != "dusts" && items[id].rarity != "unique"){
		button('.'+type+'.' + id, id, nextAction[type]);
	}
	updateCounter(type, id);
}

function buyable(id){
	if (pay(buyables[id].cost[1], buyables[id].cost[2], buyables[id].cost[0]) == true){
		if (buyables[id].class == "unlock"){
			$('.buyable.'+id).hide();
			logMessage("unlock");
			buyableStatus[id] = "unlocked";

			if(buyables[id].subclass == "submachine"){
				$('#'+buyables[id].unlocks).show();
			}

			if (id == "mentAllUnlock"){
				button("#log .header", null, "mentAll")
				$(".button.mentAll").append('<span class="counter"> (<span class="number">'+activeLogCounter+'</span>)</span>')
			}
			if (id == "reifyMaxUnlock"){
				button("#ideas .header", null, "reifyMax")
			}
			if (id == "pulverizeMaxUnlock"){
				button("#things .header", null, "pulverizeMax")
			}
			if (id == "mentalizeMaxUnlock"){
				button("#log .header", null, "mentalizeMax")
			}
			if (id == "purifyMaxUnlock"){
				button("#ideas .header", null, "purifyMax")
			}
			if (id == "autoMentalizeUnlock"){
				clicker("#log .header", "autoMentalize", "mentalize")
			}
			if (id == "autoPurifyUnlock"){
				clicker("#ideas .header", "autoPurify", "purify")
			}	
			if (id == "autoReifyUnlock"){
				clicker("#ideas .header", "autoReify", "reify")
			}	
			if (id == "autoPulverizeUnlock"){
				clicker("#things .header", "autoPulverize", "pulverize")
			}	

		} else if (buyables[id].class == "conv"){
			acquire(buyables[id].effect[1], buyables[id].effect[2], buyables[id].effect[0]);
		}
	}
}

function unlockMachine(id){
	if (window[items[id].machineCostA[1]][items[id].machineCostA[2]]>= items[id].machineCostA[0] && window[items[id].machineCostB[1]][items[id].machineCostB[2]]>= items[id].machineCostB[0] ){
		pay(items[id].machineCostA[1], items[id].machineCostA[2], items[id].machineCostA[0]);
		pay(items[id].machineCostB[1], items[id].machineCostB[2], items[id].machineCostB[0]);
		$('.machineUnlock.'+id).hide();
		$('.machine.'+id).show();
		machineStatus[id] = "unlocked";
		logMessage("machineU");
	}
}

function logMessage(id){
	logCount++;
	activeLogCounter++;
	updateActiveLogCounter();
	$('#log .content').prepend('<div class="item logMessage '+ id +' logCount-'+logCount+' active"><span class="count">'+logCount+' </span><span class="name">'+ items[id].log+'</span></div>');
	button('.logCount-' + logCount, id, "mentalize");
}

function logMessageTooMany(id){
	logCount++;
	activeLogCounter++;
	updateActiveLogCounter();
	$('#log .content').prepend('<div class="logMessage '+ id +' logCount-'+logCount+' active"><span class="count">'+logCount+' </span><span class="name">'+ items[id].logTooMany+'</span></div>');
	button('.logCount-' + logCount, id, "mentalize");
}

function mentalize(id, instance, amount){
	if(showStatus.ideas == "locked"){
		showStatus.ideas = "unlocked"
		$('#ideas').fadeIn();
	}
	if (pay("ideas", "mind", amount) == true){
		logMessage("mentalize");
		acquire("ideas", id, amount);

		$(instance + " .button").remove();
		$(instance).addClass("inactive").removeClass("active");
		activeLogCounter--;
		updateActiveLogCounter();
		if (id == "mentalize") {
			acquire("ideas", "recursion", 1)
		}
	}
}

function reify(id, amount){
	if(showStatus.things == "locked"){
		showStatus.things = "unlocked"
		$('#things').fadeIn();
	}
	if (pay("things", "matter", amount) && pay("ideas", id, amount) == true){
		
		if (amount < 100){
			for (var i = 0; i < amount; i++) {
				logMessage("reify");
			}
		} else {
			logMessageTooMany("reify");
		}
		acquire("things", id, amount)
		if (id == "reify") {
			acquire("ideas", "recursion", 10)
		}
	}
}

function pulverize(id, amount){
	if (showStatus.machines == "locked"){
		showStatus.machines = "unlocked";
		$('#machines').delay(2000).fadeIn();;
	}

	if (pay("ideas", "strength", amount) && pay("things", id, amount) == true){
		if (amount < 100){
			for (var i = 0; i < amount; i++) {
				logMessage("pulverize");
			}
		} else {
			logMessageTooMany("pulverize");
		}
		acquire("dusts", id, amount)		
		if (id == "pulverize") {
			acquire("ideas", "recursion", 100)
		}
	}
}

function mentalizeAll(){
	var counter = $('.logMessage.active').not('.machineU').not('.unlock').length;
	if (counter > 0 && counter <= ideas.mind){
		$('.logMessage.active .button').not('.machineU .button').not('.unlock .button').remove();
		$('.logMessage.active').not('.machineU').not('unlock').addClass("inactive").removeClass("active");
		activeLogCounter = activeLogCounter - counter;
		pay("ideas", "mind", counter)
		acquire("ideas", "idealSubstance", counter)
		logMessage("mentAll");
	}
}

function button(appendTo, itemType, buttonType){
	$(appendTo).append('<div class="button '+buttonType+'">'+buttons[buttonType].label+'</div></div>')
	$(appendTo + ' .button').on( "click", function() {
		if(buttons[buttonType].action == "want"){
			logMessage("want");
			if(showStatus.log == "locked"){
				showStatus.log = "unlocked"
				$('#log').fadeIn();
			}
		}
		if(buttons[buttonType].action == "mentalize"){
			mentalize(itemType, appendTo, 1);
		}
		if(buttons[buttonType].action == "reify"){
			reify(itemType, 1);
		}
		if(buttons[buttonType].action == "pulverize"){
			pulverize(itemType, 1);
		}
		if(buttons[buttonType].action == "mentalizeAll"){
			mentalizeAll();
		}
		if(buttons[buttonType].action == "reifyMax"){
			reifyMax();
		}
		if(buttons[buttonType].action == "pulverizeMax"){
			pulverizeMax();
		}
		if(buttons[buttonType].action == "mentalizeMax"){
			mentalizeMax();
		}
		if(buttons[buttonType].action == "purifyMax"){
			purifyMax();
		}
		impureStatus()
	});
	//impureStatus();
}

function updateCounter(type, id){
	$('.'+type+'.'+id+' .counter .amount').html(Math.floor(window[type][id]));
}

function updateActiveLogCounter(){
	$('.mentAll .counter .number').html(Math.floor(activeLogCounter));
};

$(document).bind('keydown', function (event) {
	if (event.key == "f") {
		logMessage("respect");
	}
});