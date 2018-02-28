// Write your JavaScript here
function getChange(){
    var amountDue = parseFloat($('#amount-due').val());
    var amountReceived = parseFloat($('#amount-received').val());

    var change = (amountReceived - amountDue) * 100;
    
    var aCurrency = [
        { divTag: '#dollars-output', value: 100 },
        { divTag: '#quarters-output', value: 25 },
        { divTag: '#dimes-output', value: 10 },
        { divTag: '#nickels-output', value: 5 },
        { divTag: '#pennies-output', value: 1 }
    ];

    aCurrency.forEach(function(item){
        if (item.value != 1) {
            $(item.divTag).html(parseInt(change / item.value));
            change %= item.value;
        } else {
            $(item.divTag).html(Math.round(change));            
        }
    });


    // $('#dollars-output') = (change -(change % 100)/100);
    //     change = change - (dollars * 100);
    
    // var quarters = (change -(change % 25)/25)
    //     change = change - (dollars * 25)
   
    // var dimes = (change -(change % 10)/10)
    //     change = change - (dollars * 10)
    
    // var nickels = (change -(change % 5)/5)
    //     change = change - (dollars * 5)

    // var pennies = (change -(change % 1)/1)
    //     change = change - (dollars * 1)


}
$('#calculate-change').click(getChange)

