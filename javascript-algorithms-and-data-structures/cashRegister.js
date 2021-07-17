const openCashRegister = function(diffToReturn, availableCash) {
    // reference array for currency
    let currency = [100, 20, 10, 5, 1, 0.25, 0.1, 0.05, 0.01];

    // define object to hold cash return info
    const returnInfo = {
      diff: diffToReturn,
      cashReturned: []
    }

    // find index of where to start withdrawing cash
    let index = 0;
    while (currency[index] >= returnInfo.diff) {
      index++;
    }

    // loop through cash drawer to withdraw starting from start index
    while (index < currency.length) {
      while (availableCash[index][1] > 0) {
        // return if change due is fully returned
        if (returnInfo.diff === 0) {
          return returnInfo;
        }
        // break if currency is larger than change due
        if (returnInfo.diff < currency[index]) {
          // console.log('move on to next drawer')
          break;
        }
        availableCash[index][1] = Number(Math.round(availableCash[index][1] - currency[index] + "e2") + "e-2");
        returnInfo.diff = Number(Math.round(returnInfo.diff - currency[index] + "e2") + "e-2");

        // hold given change in returnInfo.changeReturned array and check if element already exists
        const elIndex = returnInfo.cashReturned.findIndex((el) => el[0] === availableCash[index][0]);

        if (elIndex === -1) {
            returnInfo.cashReturned.push([availableCash[index][0], currency[index]]);
        } else {
            returnInfo.cashReturned[elIndex][1] = Number(Math.round(returnInfo.cashReturned[elIndex][1] + currency[index] + "e2") + "e-2");
        }
      }
      index++;
    }
    return returnInfo;
}


const checkCashRegister = function(price, cash, cashInDrawer) {
    cashInDrawer.reverse();
    // define the object to be returned
    const statuses = ['CLOSED', 'OPEN', 'INSUFFICIENT_FUNDS'];
    let changeInfo = {
      status: '',
      change: []
    };

    // calculate difference to return
    const diffToReturn = Number(Math.round(cash - price + "e2") + "e-2");

    // compare to the amount the customer pays with and set properties accordingly
    if (cash < price) {
      changeInfo.status = statuses[0];
      console.log(changeInfo);
      return changeInfo;
    } else if (cash === price) {
      changeInfo.status = statuses[0];
      console.log(changeInfo);
      return changeInfo;
    } else if (cash > price) {
      const returnInfo = openCashRegister(diffToReturn, cashInDrawer);
      if (returnInfo.diff > 0) {
        changeInfo.status = statuses[2];
        console.log(changeInfo);
        return changeInfo;
      } else if (returnInfo.diff === 0) {
        changeInfo.status = statuses[1];
        changeInfo.change = returnInfo.cashReturned; 
        console.log(changeInfo);
        return changeInfo;
      }
    }
}

checkCashRegister(1.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);



/* Footnotes
1 Code based on 'Rounding Decimals in JavaScript' by Jack Moore, retrieved from https://www.jacklmoore.com/notes/rounding-in-javascript/
*/