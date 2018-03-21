({
	sortByDate : function(component, event, helper) {
        if (component.get("v.selectedAlertOrder") == "date-asc") {
        	component.set("v.selectedAlertOrder", "date-desc");
        } else {
            component.set("v.selectedAlertOrder", "date-asc");   
        }
	},
    searchModeOn : function(component, event, helper) {
		component.set("v.searchMode", true);
    },
    searchModeOff : function(component, event, helper) {
		component.set("v.searchMode", false);
        component.set("v.selectedAlertSearch", "")
    }
})