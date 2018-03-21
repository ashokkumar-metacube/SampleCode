({
	selectAll : function(component, event, helper) {
		component.set("v.selectedAlertSection", "all")
	},
    selectTodo : function(component, event, helper) {
		component.set("v.selectedAlertSection", "todo")
	},
	selectOverdue : function(component, event, helper) {
		component.set("v.selectedAlertSection", "overdue")
	}
})