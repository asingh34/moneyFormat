function moneyFormat (x,symFunc) 
{
    var result ='';
   	
	for (var i = x.length-1; i >= 0; i--) 
	{ 
        if (symFunc (x.length, i)) 
		{
			result = ',' + result; 
		}
		result = x.charAt (i) + result;
	}
	
    return result;

}
var moneyTable = 
{   
    USD: function(length,i) 
        {
            var dist = length-1-i;
            return (dist>0  && (dist) % 3 === 0 );

        },    
    INR: function(length,i) 
        {
            var result = false; 
            var dist = length - 1 -i 
            if ( dist  === 3 ) 
            {
                result = true; 
            } 
            else if ( dist > 3 && ( dist-3) % 2 === 0 ) 
            { 
                result = true; 
            } 
            return result; 

        }
}


var currency = process.argv[ 2 ] ;
var s = process.argv[ 3 ] ;
var func = moneyTable [ currency ] ;
if ( func != null) 
{
    console.log (moneyFormat (s, func)); 

}
else {
    throw ('I do not recognize currenncy symbol ' + currency);
}

