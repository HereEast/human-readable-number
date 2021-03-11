module.exports = function toReadable (number) {
  let one = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 
                      'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  let ten = ['', '', 'twenty', 'thirty', 'fourty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

  let num = String(number); 

  if (number === 0) return 'zero';

  if (number < 20) {
      return one[number];
  }

  if (number >= 20 && number <= 99) {
      return ten[num[0]] + ' ' + one[num[1]];
  }

  if (number >= 100) {
      return one[num[0]] + ' hundred' + ten[num[1]] + ' ' + one[num[2]];
  }
}

