({
	handleAlertItemSelectionEvent : function(component, event, helper) {
		console.log("--handleAlertItemSelectionEvent", event.getParam("alertItem"))
        
        if (event.getParam("alertItem")) {
        	component.set("v.selectedAlertItem", event.getParam("alertItem"));
	        component.set("v.isListView", false);   
        } else {
    		component.set("v.selectedAlertItem", null);
	        component.set("v.isListView", true);        
        }
	}
})