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


var moneyTemplates = 
{   
    US:
        {
            func: format33, 
            sym: ',',
            decSym: '.',
            decPlaces: 2,
            currSym:'$'
        },    
    DE:
        {
            func: format33,
            sym: '.',
            decSym: ',',
            decPlaces: 2,
            currSym:'€'

        },    
    IN:
        {
            func: format32,
            sym: ',', 
            decSym: '.',
            decPlaces: 2,
            currSym:'₹'

        } 
};
   
var moneyTable = 

{
    US:function()
       
        {
           return  getMoneyTable ('US');    
        },
    DE:function()
       
        {
           return  getMoneyTable ('DE');    
        },
    IN:function()
       
        {
           return  getMoneyTable ('IN');    
        },
    SG:function()
       
        {
           return  getMoneyTable ('US');    
        },

    CA:function()
       
        {
           return  getMoneyTable ('US');    
        },

    FR:function()
       
        {
           return  getMoneyTable ('US',{currSym:'€'})

        }
};
function getMoneyTable (base, options)
{

    var result = {}; 
    for (var x in moneyTemplates [base]) 
    {
        result [x] = moneyTemplates [base] [x];  
    }
    for (var y in options) 
    {
        result [y] = options [y];
    }
    return result;
} 
function moneyFormat (amount,currency) 
{
    var moneyObj = moneyTable[currency](); 
    var symFunc = moneyObj.func;
    var symbol = moneyObj.sym;
    var places = moneyObj.decPlaces; 
    //console.log ( 'places =', places );
    var decSym = moneyObj.decSym; 
    var currSym = moneyObj.currSym; 
    //console.log ( 'decSym =',decSym );
    var x = parseInt(amount).toString() 
    //console.log ( 'x =', x );
    var y = amount - parseInt(amount); 
    //console.log ( 'y =', y );
    y = y.toString().substring(2,2+places) 
    //console.log ( 'y =', y )
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
	result = currSym + ' ' + result + decSym + y; 
    return result;

}



var currency = process.argv[ 2 ] ;
var s = process.argv[ 3 ] ;
console.log (moneyFormat (s, currency)); 


