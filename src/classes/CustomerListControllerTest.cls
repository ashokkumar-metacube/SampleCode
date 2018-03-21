/**
*	@description : Apex class used to testCustomerListController
**/
@isTest(seeAllData=false)
public with sharing class CustomerListControllerTest {
	
	/**
	*	@description : set up test data
	**/
	@testSetup
	private static void setupTestData(){
		// create customer 
		List<Customer__c> customersList = new List<Customer__c>();
		customersList.add(new Customer__c(Email__c='Test123@gmail.com',Name__c='Test 1',Phone__c='123',Status__c='Active'));
		customersList.add(new Customer__c(Email__c='Test123@gmail.com',Name__c='Test 2',Phone__c='123',Status__c='Prospective'));
		customersList.add(new Customer__c(Email__c='Test123@gmail.com',Name__c='Test 3',Phone__c='123',Status__c='Lead'));
		insert customersList;
	}

	/**
	*	@description : set up test data
	**/
	static testMethod void test_getCustomers(){
		System.assertEquals(3,CustomerListController.getCustomers().size());
	}
}