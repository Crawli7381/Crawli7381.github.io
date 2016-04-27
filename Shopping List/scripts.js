$(document).ready(function () {


    $("#btnAdd").click(function () {
        var item = $("#item").val();
        $("ul").append("<li>" + item +"</li>");
    });


    $("#btnRemove").click(function () {
        
        
        //this is where we get the item from the input box
        var item = $("#item").val();
        
        //get the list of li's from the html
        var list_items= $("li");
      
        
        //iterate or index thru the list_items to find the users input
        for(var i=0; i<list_items.length; i++)
         {
             
          console.log("list_item at index " + i + " = " + list_items[i].textContent);
        
             if(list_items[i].textContent == item){
                 console.log("Found a match!!!")
                 list_items[i].remove();
                 
             }
                
         }
        
    });

});