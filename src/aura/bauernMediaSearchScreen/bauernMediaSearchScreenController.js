({
    performSearch : function(component, event) {
        var searchInput = component.find("searchInput");
        var searchValue = searchInput.get("v.value");
        var queryEvent = component.getEvent("MediaQueryUpdated");
        queryEvent.setParams({"mediaQuery" : searchValue});
        queryEvent.fire();
    },
    mediaSearchCancel : function(component, event) {
        var searchInput = component.find("searchInput");
        searchInput.set("v.value","");
    }
})