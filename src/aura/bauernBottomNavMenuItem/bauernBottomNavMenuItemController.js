({
    handleClick : function(cmp, event, helper) {
        var appEvent = $A.get("e.c:bauernBottomNavEvt");
        if (appEvent) {
            appEvent.setParams(
                { 
                    "data" : {"itemNumber" : cmp.get('v.itemNumber')} 
                }
            );
            appEvent.fire();
        }
    }
})