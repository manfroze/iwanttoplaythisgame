function earn(){
	$.each(itemCounter, function(key, type){
		$.each(type, function(id){
			$('.'+key+'s.'+id).remove();
			type[id] = type[id] + 1500;
		});
	});
	buildAllItems();
}

function unlock(){
	earn();
	unlockMachine("mentalize");
	unlockMachine("reify");
	unlockMachine("want");
	earn();
	buildBuyables();

}


$(document).bind('keydown', function (event) {
	if (event.key == "s") {
		$('#wrapper .box').show();
		$('.machineUnlock').show();
		$('#machines').show();
		$.each(showStatus, function(id){
			showStatus[id] = "unlocked";
		});
	}
});

$(document).bind('keydown', function (event) {
	if (event.key == "e") {
		earn();
	}
});

$(document).bind('keydown', function (event) {
	if (event.key == "u") {
		$('#wrapper .box.main').show();
		$('.machineUnlock').show();
		$('#machines').show();
		$.each(showStatus, function(id){
			showStatus[id] = "unlocked";
		});
		$.each(buyables, function(id){
			buyableStatus[id] = "unlocked";
		});
		unlock();
	}
});

$(document).bind('keydown', function (event) {
	if (event.key == "0") {
		startVar();
		location.reload();
	}
});