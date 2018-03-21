({
    controllerFunction : function(component, event, helper) {
        $("#filterRange").slider({
            range: "min",
            min: 0,
            max: 5,
            value: component.get("v.duration"),
            slide: function(e, ui) {
                var toggleValue=ui.value;
                component.set("v.duration", toggleValue);
                var evnt = component.getEvent("durationUpdated");
                evnt.setParams({"value" : toggleValue});
                evnt.fire();
            }
        });
        
    },
    keywordsUpdated : function(component, event, helper) {
        var toggleButton = component.find("keywords");
        var keywordValue = toggleButton.get("v.value");
        var evnt = component.getEvent("keywordsUpdated");
        evnt.setParams({"value" : keywordValue});
        evnt.fire();
    },
    ViewSelectionClicked : function(component, event, helper) {
        var selectedText = event.currentTarget.innerHTML;
        component.set("v.viewType", selectedText.trim());
        var evnt = component.getEvent("viewTypeUpdated");
        evnt.setParams({"value" : selectedText.trim()});
        evnt.fire();
    },
    featuredToggleChanged : function(component, event, helper) {
        var toggleButton = component.find("isFeatured");
        var toggleValue = toggleButton.get("v.checked");
        var evnt = component.getEvent("isFeauredUpdated");
        evnt.setParams({"value" : toggleValue});
        evnt.fire();
    },
    durationSliderChanged : function(component, event, helper) {
        
    },
    clearFilter : function(component, event, helper) {
        var evnt = component.getEvent("clearFilterClicked");
        evnt.fire();
    },
    applyFilter : function(component, event, helper) {
        var evnt = component.getEvent("applyFilterClicked");
        evnt.fire();
    }
})