/**
*	@description : Apex class used to get customer records from the datatable
**/
public with sharing class CustomerListController {
	/**
	*	@description :Method to getch customer records
	**/
	@AuraEnabled
	public static List<Customer__c> getCustomers(){
		return [SELECT Id, Email__c, Name__c, Phone__c, Status__c FROM Customer__c ORDER BY Name];
	}

}