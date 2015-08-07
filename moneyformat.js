function format33 (length,i,sym)  
        {
            var result = null; 
            var dist = length-1-i;
            if (dist>0  && (dist) % 3 === 0 )
            {
                result = sym;

            }
            return result; 
        }
function format32 (length,i,sym)   
        {
            var result = null; 
            var dist = length - 1 -i 
            if ( dist  === 3 ) 
            {
                result = sym; 
            } 
            else if ( dist > 3 && ( dist-3) % 2 === 0 ) 
            { 
                result = sym; 
            } 
            return result; 

        }


var moneyTable = 
{   
    US:
        {
            func: format33, 
            sym: ','
        },    
    DE:
        {
            func: format33,
            sym: '.'
        },    
    IN:
        {
            func: format32,
            sym: ',' 
        } 
        
}
moneyTable.SG = moneyTable.US;
moneyTable.CA = moneyTable.US; 
function moneyFormat (amount,currency) 
{
    var symFunc = moneyTable[currency].func;
    var symbol = moneyTable[currency].sym;
    var x = amount.toString();
    if (symFunc == null) {
        throw ('I do not recognize country, use correct ISO-3166 code. ' + currency);
    }

    var result ='';
   	
	for (var i = x.length-1; i >= 0; i--) 
	{ 
        var sym =symFunc (x.length, i, symbol); 
        if ( sym != null) 
		{
			result = sym + result; 
		}
		result = x.charAt (i) + result;
	}
	
    return result;

}



var currency = process.argv[ 2 ] ;
var s = process.argv[ 3 ] ;
console.log (moneyFormat (s, currency)); 


