({
	handleNavItemEvent : function(cmp, event, helper) {
		var data = event.getParam("data");
		console.log('handleNavItemEvent item - ', data.itemNumber);
        cmp.set('v.activeButton', data.itemNumber);        
	}
})