module.exports = function toReadable (number) {
  let zeroToNineteen = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 
                      'eleven', 'twelve', 'thirteen', 'fourteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

  if (number < 20) {
      return zeroToNineteen[number];
  }
}

