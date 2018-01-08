var myApp = angular
			.module("myModule",[])
			.controller("myController",function($scope){
			var employees = [
			{name : "Ben" , dateOfBirth : new Date("November 23, 1980") , gender : "Male", salary : 55000.788},
			{name : "Sara" , dateOfBirth : new Date("January 14, 1991") , gender : "Female", salary : 66000},
			{name : "Rahul" , dateOfBirth : new Date("December 07, 1993") , gender : "Male", salary : 70000},
			{name : "Gopu" , dateOfBirth : new Date("November 05, 1980") , gender : "Male", salary : 550235},
			{name : "Krishna" , dateOfBirth : new Date("February 23, 1980") , gender : "Male", salary : 40000},
			{name : "Sunil" , dateOfBirth : new Date("November 20, 1980") , gender : "Male", salary : 55000.788},
			{name : "Mohan" , dateOfBirth : new Date("November 03, 1980") , gender : "Male", salary : 444444},
			
			];
			
		       $scope.employees=employees;
		       $scope.rowLimit=5;
			   $scope.sortcol = "name";
			   $scope.reverseSort = false;
			   
			   $scope.sortData= function(column){
				   $scope.reverseSort = ($scope.sortcol==column)? !$scope.reverseSort:false;
				   $scope.sortcol= column;
			   }
			   
			   $scope.getSortClass= function(column){
				  if($scope.sortcol== column){
					return $scope.reverseSort ? 'arrowDown':'arrowUp'; 
				  }
				  return '';
			   }
			   			   
});

