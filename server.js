var inquirer = require('inquirer');
var bodyParser = require('body-parser');
var path = require('path')




var waitForDisplay = true
var displayProducts = function() {
        for (var i = 0; i < allprods.length; i++) {
            console.log("ID: " + allprods[i].ItemID + " || Product Name: " + allprods[i].ProductName + " || Price: " + allprods[i].Price.toFixed(2));
        }    
        waitForDisplay = false;
        userPrompt();
};

     displayProducts();    

var userPrompt = function() {
        validate: function(value) {
            if (isNaN(value) == false) {
                return true;
            } else {
                return false;
            }
        },
        filter: Number

        validate: function(value) {
            if (isNaN(value) == false) {
                return true;
            } else {
                return false;
            }
        },
        filter: Number

           var newValue = ''
           var oldValue = answer.Quantity
           newValue = res[0].StockQuantity-answer.Quantity;
           //console.log(newValue);
           if (answer.Quantity > res[0].StockQuantity) {
                console.log("Insufficent Quantity");
                userPrompt();
            } else {
                console.log("Total Price: $" + (Number(answer.Quantity) * Number(res[0].Price))+".00");
                
               //connection.query('UPDATE Products SET StockQuantity = :StockQuantity',{StockQuantity: newValue}, ' WHERE ItemID = :ItemID', {ItemID: answer.ItemID}, function(err,res) {
               connection.query('UPDATE Products SET StockQuantity = ? WHERE ItemID = ?', [newValue, answer.ItemID], function(err,res) {
               });
            }
}



// $(document).ready(function() {
//     $('input#input_text, textarea#textarea1').characterCounter();
//   });