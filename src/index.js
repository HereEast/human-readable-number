module.exports = function toReadable (number) {
  let oneToNineteen = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 
                      'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  let twenties = ['', '', 'twenty', 'thirty', 'fourty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

  let num = String(number); 

  if (number === 0) return 'zero';

  if (number < 20) {
      return oneToNineteen[number];
  }

  if (number < 100) {
      if (num[1] === '0') {
        return twenties[num[0]];
      }
      return twenties[num[0]] + ' ' + oneToNineteen[num[1]];
  }

  if (number > 100) {
      if (num[1] === '0' && num[2] === '0') {
          return oneToNineteen[num[0]] + ' hundred';
      } else if (num[2] === '0') {
        return oneToNineteen[num[0]] + ' hundred' + ' ' + twenties[num[1]];
      }
      return oneToNineteen[num[0]] + ' hundred' + ' ' + twenties[num[1]] + ' ' + oneToNineteen[num[2]];
  }
}

