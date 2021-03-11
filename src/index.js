module.exports = function toReadable (number) {
  let zeroToNineteen = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 
                      'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  let twentyToNinety = ['', '', 'twenty', 'thirty', 'fourty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

  let num = String(number); 

  if (number < 20) {
      return zeroToNineteen[number];
  }

  if (number >= 20 && number <= 99) {
      return twentyToNinety[num[0]] + ' ' + zeroToNineteen[num[1]];
  }
}

