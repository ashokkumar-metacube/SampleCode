({
    sectionChanged : function(component, event, helper) {
		if (component.get("v.selectedAlertSection") === "all") {
            component.set("v.itemsList", [
                {'Subject':'Action Overdue','OwnerName':'James Harisson','DueDate':'Today','IconName':'alert-re.png'},
                {'Subject':'Policy Cancellation','OwnerName':'David Barker','DueDate':'Today','IconName':'alert-re.png'},
                {'Subject':'Process Claim','OwnerName':'Bertie Roberts','DueDate':'Aug 21, 2017','IconName':'alert-blue.png'},
                {'Subject':'Contact Customer','OwnerName':'Sophia Ryan','DueDate':'Aug 21, 2017','IconName':'alert-blue.png'},
                {'Subject':'New Customer Regis..','OwnerName':'Clark Wagner','DueDate':'Completed','IconName':'alert-gray.png'},
                {'Subject':'Call Customer','OwnerName':'Lola Reynolds','DueDate':'Completed','IconName':'alert-gray.png'}
            ]);
            
        } else if (component.get("v.selectedAlertSection") === "todo") {
            component.set("v.itemsList", [
                {'Subject':'Action Overdue','OwnerName':'James Harisson','DueDate':'Today','IconName':'alert-re.png'},
                {'Subject':'Policy Cancellation','OwnerName':'David Barker','DueDate':'Today','IconName':'alert-re.png'},
                {'Subject':'Process Claim','OwnerName':'Bertie Roberts','DueDate':'Aug 21, 2017','IconName':'alert-blue.png'},
                {'Subject':'Contact Customer','OwnerName':'Sophia Ryan','DueDate':'Aug 21, 2017','IconName':'alert-blue.png'}
            ]);
        } else if (component.get("v.selectedAlertSection") === "overdue") {
            component.set("v.itemsList", [
                {'Subject':'New Customer Regis..','OwnerName':'Clark Wagner','DueDate':'Completed','IconName':'alert-gray.png'},
                {'Subject':'Call Customer','OwnerName':'Lola Reynolds','DueDate':'Completed','IconName':'alert-gray.png'}
            ]);
        }
	},
    searchChanged : function(component, event, helper) {
        var all = [
            {'Subject':'Action Overdue','OwnerName':'James Harisson','DueDate':'Today','IconName':'alert-re.png'},
            {'Subject':'Policy Cancellation','OwnerName':'David Barker','DueDate':'Today','IconName':'alert-re.png'},
            {'Subject':'Process Claim','OwnerName':'Bertie Roberts','DueDate':'Aug 21, 2017','IconName':'alert-blue.png'},
            {'Subject':'Contact Customer','OwnerName':'Sophia Ryan','DueDate':'Aug 21, 2017','IconName':'alert-blue.png'},
            {'Subject':'New Customer Regis..','OwnerName':'Clark Wagner','DueDate':'Completed','IconName':'alert-gray.png'},
            {'Subject':'Call Customer','OwnerName':'Lola Reynolds','DueDate':'Completed','IconName':'alert-gray.png'}
        ];
        
        var searchText = component.get("v.selectedAlertSearch").toLowerCase();
        
        if (searchText) {
        	var filtered = all.filter(item => {
                return item.Subject.toLowerCase().includes(searchText);
            });
            component.set("v.itemsList", filtered);
        } else {
            component.set("v.itemsList", all);
        }
    },
    orderChanged : function(component, event, helper) {
        if (component.get("v.selectedAlertOrder") == "date-asc") {
        	component.set("v.itemsList", [
                {'Subject':'Action Overdue','OwnerName':'James Harisson','DueDate':'Today','IconName':'alert-re.png'},
                {'Subject':'Policy Cancellation','OwnerName':'David Barker','DueDate':'Today','IconName':'alert-re.png'},
                {'Subject':'Process Claim','OwnerName':'Bertie Roberts','DueDate':'Aug 21, 2017','IconName':'alert-blue.png'},
                {'Subject':'Contact Customer','OwnerName':'Sophia Ryan','DueDate':'Aug 21, 2017','IconName':'alert-blue.png'}
            ]);    
        } else {
            component.set("v.itemsList", [
                {'Subject':'Process Claim','OwnerName':'Bertie Roberts','DueDate':'Aug 21, 2017','IconName':'alert-blue.png'},
                {'Subject':'Contact Customer','OwnerName':'Sophia Ryan','DueDate':'Aug 21, 2017','IconName':'alert-blue.png'},
                {'Subject':'Action Overdue','OwnerName':'James Harisson','DueDate':'Today','IconName':'alert-re.png'},
                {'Subject':'Policy Cancellation','OwnerName':'David Barker','DueDate':'Today','IconName':'alert-re.png'}
            ]);
        }
    },
    selectItem : function(component, event, helper) {
        var appEvent = $A.get("e.c:bauernAlertItemSelectionEvt");
        appEvent.setParams({ "alertItem" : component.get("v.itemsList")[event.currentTarget.id] });
        appEvent.fire();
    }
})