module.exports = {
  execPayment: function (notes, amount) {
      let distribution = {};
      let note;

      for (let i=0; i < notes.length; i++) {
        distribution[notes[i]] = 0;
        while (notes[i] <= amount) {
          amount = amount - notes[i];
          note = distribution[notes[i]];
          note += 1;
          distribution[notes[i]] = note;
        }
      }

      return distribution;
  }
};
