// brauche funktion mit zwei Parameter für Betrag und Preis
function casher(paidAmount, price) {
  // was in der Kasse (Geld) schon gibt schreibe ich als Array
  let cashNumbers = [
    "500",
    "200",
    "100",
    "50",
    "20",
    "10",
    "5",
    "2",
    "1",
    "0.50",
    "0.20",
    "0.10",
    "0.05",
    "0.02",
    "0.01",
  ];
  // zweite Array die gleiche Werte wie die erste Array aber als wörter => für Ausgabe im Terminal
  let cashWords = [
    "five hundred euros notes",
    "two hundred euros notes",
    "hundred euros notes",
    "fifty euros notes",
    "twenty euros notes",
    "ten euros notes",
    "five euros notes",
    "two euros coin",
    "one euro coin",
    "fifty cents coin",
    "twenty cents coin",
    "ten cents coin",
    "five cents coin",
    "two cents coin",
    "one cent coin",
  ];

  // das  Wechselgeld brechnen :
  let receive = paidAmount - price;
  console.log(receive);

  let expected = "";
  // loop durch zwei Arrays ud prüft wann das Wechselgeld größer oder gleich ist ??
  for (let i = 0; i < cashNumbers.length; i++) {
    // wenn Wechselgeld größe oder gleich durch nummer in der Kasse => erwartet das Wechselgeld durch jede Nummer von Array und brechnet welche und wieviel muss zurückgeben
    if (receive >= cashNumbers[i]) {
      expected = Math.floor(receive / cashNumbers[i]);
      receive = parseFloat((receive % cashNumbers[i]).toFixed(2));
      //console.log(receive);
      console.log(
        expected +
          " x " +
          cashNumbers[i] +
          "€ // " +
          expected +
          " " +
          cashWords[i]
      );
    }
  }
  // wenn der Betrag kleiner als Preis
  if (paidAmount < price) return console.log("that is not enough");
}
casher(50, 3.75);
console.log();
casher(20, 4.5);
console.log();
casher(10, 15);
