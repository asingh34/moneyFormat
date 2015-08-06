
var moneyTable = 
{   
    US: function(length,i) 
        {
            var result = null 
            var dist = length-1-i;
            if (dist>0  && (dist) % 3 === 0 )
            {
                result = ',';

            }
            return result; 
        },    
     DE: function(length,i) 
        {
            var result = null 
            var dist = length-1-i;
            if (dist>0  && (dist) % 3 === 0 )
            {
                result = '.';

            }
            return result; 
        },    
    IN: function(length,i) 
        {
            var result = null; 
            var dist = length - 1 -i 
            if ( dist  === 3 ) 
            {
                result = ',' ; 
            } 
            else if ( dist > 3 && ( dist-3) % 2 === 0 ) 
            { 
                result = ','; 
            } 
            return result; 

        }
}

function moneyFormat (x,currency) 
{
    var symFunc = moneyTable[currency];

    if (symFunc == null) {
        throw ('I do not recognize country, use correct ISO-3166 code. ' + currency);
    }

    var result ='';
   	
	for (var i = x.length-1; i >= 0; i--) 
	{ 
        var sym =symFunc (x.length, i); 
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


