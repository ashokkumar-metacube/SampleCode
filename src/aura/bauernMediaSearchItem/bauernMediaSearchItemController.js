({
	mediaSearchItemClicked : function(component, event, helper) {
        var name = component.get("v.searchItemName");
        var type = component.get("v.searchItemType");
        var queryEvent = component.getEvent("MediaSearchItem");
        queryEvent.setParams({"itemName" : name,"itemType" : type});
        queryEvent.fire();
	}
})