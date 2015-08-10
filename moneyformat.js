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
            sym: ',',
            decSym: '.',
            decPlaces: 2
        },    
    DE:
        {
            func: format33,
            sym: '.',
            decSym: ',',
            decPlaces: 2

        },    
    IN:
        {
            func: format32,
            sym: ',', 
            decSym: '.',
            decPlaces: 2

        } 
        
}
moneyTable.SG = moneyTable.US;
moneyTable.CA = moneyTable.US; 
function moneyFormat (amount,currency) 
{
    var symFunc = moneyTable[currency].func;
    var symbol = moneyTable[currency].sym;
    var places = moneyTable[currency].decPlaces; 
    //console.log ( 'places =', places );
    var decSym = moneyTable[currency].decSym; 
    //console.log ( 'decSym =',decSym );
    var x = parseInt(amount).toString() 
    //console.log ( 'x =', x );
    var y = amount - parseInt(amount); 
    //console.log ( 'y =', y );
    y = y.toString().substring(2,2+places); 
    //console.log ( 'y =', y );
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
	result = result + decSym + y; 
    return result;

}



var currency = process.argv[ 2 ] ;
var s = process.argv[ 3 ] ;
console.log (moneyFormat (s, currency)); 


