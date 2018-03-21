({
	back : function(component, event, helper) {
		console.log('back');
        var appEvent = $A.get("e.c:bauernAlertItemSelectionEvt");
        appEvent.fire();
	}
})