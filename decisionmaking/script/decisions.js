$(document).ready(function(){
	
	checklength();
	
	$('.addPlus,.additem').click(function(){
		checkAdd();
	});
	
	$('.done,.doneitem').click(function(){
		var inputElem = checklength();
		if(inputElem.length >= 2){
			$(inputElem).each(function(){
				if($(this).val().length > 0){
					console.log(1);
				}
			})
		}
		$('#itemsDiv').effect("slide",{direction:"left",mode:"hide"});
		$('#factorsdiv').effect("slide",{direction:"right",mode:"show"});
	});
	
	
});


function removeAdd(that){
		$(that).parent().remove();
		checklength();
}

function checkAdd(){
	$('#addcontrol').before('<span><input type="text" size="60"><span class="plusminus minus" onclick="removeAdd(this)">X</span></span>');
	checklength();
	
}




function checklength(){
	var count = $('#items :input');
	if(count.length <=2){
		$('.plusminus').css('display','none');
	}else{
		$('.plusminus').css('display','inline');
	}
	return count;
}