(function(){
    'use strict';
    
    angular
        .module('app')
        .controller('ColorsController', ColorsController);
        
        
        function ColorsController(){
         this.data ='the data';   
        }
    
}());