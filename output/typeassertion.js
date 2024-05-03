"use strict";
{
    // type Assertion 
    function kg(value) {
        if (typeof value === 'string') {
            let finalvalue = parseFloat(value) * 1000;
            return ` FinalValue is  ${finalvalue}`;
        }
        else if (typeof value == 'number') {
            let finalvalue = value * 1000;
            return finalvalue;
        }
    }
    let result1 = kg('23');
    console.log(result1);
}
