({
	getCustomers : function(component) {
		var action = component.get("c.getCustomers");
		action.setCallback(this, function(response){
			if(response.getState() == 'SUCCESS'){
				component.set("v.customersList",response.getReturnValue());
			}
		});
		$A.enqueueAction(action);
	}
})