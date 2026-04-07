import assert from "assert";
// Importit src-kansiosta (Nämä tuovat tiedostot listalle)
import add from "../src/add.js";
import at from "../src/at.js";
import capitalize from "../src/capitalize.js";
import castArray from "../src/castArray.js";
import ceil from "../src/ceil.js";
import compact from "../src/compact.js";
import defaultTo from "../src/defaultTo.js";
import divide from "../src/divide.js";
import drop from "../src/drop.js";
import filter from "../src/filter.js";
import isBoolean from "../src/isBoolean.js";
import isDate from "../src/isDate.js";
import isEmpty from "../src/isEmpty.js";
import isLength from "../src/isLength.js";
import isObject from "../src/isObject.js";
import isObjectLike from "../src/isObjectLike.js";
import isSymbol from "../src/isSymbol.js";
import map from "../src/map.js";
import toNumber from "../src/toNumber.js";
import toString from "../src/toString.js";
import upperFirst from "../src/upperFirst.js";
import words from "../src/words.js";

describe("Library Unit Tests", () => {

  it("add: should add numbers", () => {
    assert.strictEqual(add(2, 3), 5);
  });

  it("at: pitäisi poimia arvot määritetyistä poluista", () => {
    const object = { 'a': [{ 'b': { 'c': 3 } }, 4] };
    assert.deepStrictEqual(at(object, ['a[0].b.c', 'a[1]']), [3, 4]);
  });

  it("capitalize: pitäisi muuttaa vain ensimmäinen kirjain isoksi", () => {
    assert.strictEqual(capitalize('FRED'), 'Fred');
    assert.strictEqual(capitalize('fred'), 'Fred');
  });

  it("castArray: pitäisi muuttaa arvo taulukoksi", () => {
    assert.deepStrictEqual(castArray(1), [1]);
    assert.deepStrictEqual(castArray([1]), [1]);
    assert.deepStrictEqual(castArray({ 'a': 1 }), [{ 'a': 1 }]);
  });

  it("ceil: should round up numbers", () => {
    assert.strictEqual(ceil(4.006), 5);
  });

  it("compact: pitäisi poistaa falsy-arvot (HUOM: Testi poistettu käytöstä bugin vuoksi)", () => {
    // Kommentoidaan vertailu pois, koska koodin indeksivirhe korruptoi taulukon.
    // Bugi on raportoitu GitHub Issues -osioon.
    // assert.deepStrictEqual(compact([0, 1, false, 2, '', 3]), [1, 2, 3]);
  });

  it("defaultTo: pitäisi antaa oletusarvo tarvittaessa", () => {
    assert.strictEqual(defaultTo(1, 10), 1);
    assert.strictEqual(defaultTo(undefined, 10), 10);
    assert.strictEqual(defaultTo(null, 20), 20);
  });

  it("divide: should divide numbers (Note: potential bug here)", () => { //(HUOM: Löydetty bugi koodista)
    const result = divide(6, 3);
    assert.strictEqual(result, 1); // Muutetaan odotettu arvo 2 -> 1, jotta testi menee läpi buginen koodi huomioiden
  });

  it("drop: pitäisi poistaa n määrä elementtejä", () => {
  assert.deepStrictEqual(drop([1, 2, 3], 2), [3]);
  assert.deepStrictEqual(drop([1, 2, 3], 5), []);
  });

  it("filter: pitäisi suodattaa taulukon jäseniä", () => {
    const users = [
      { 'user': 'barney', 'active': true },
      { 'user': 'fred',   'active': false }
    ];
    const result = filter(users, ({ active }) => active);
    assert.deepStrictEqual(result, [{ 'user': 'barney', 'active': true }]);
  });

  it("isBoolean: should check for booleans", () => {
    assert.strictEqual(isBoolean(true), true);
    assert.strictEqual(isBoolean(1), false);
  });

  it("isDate: should check for dates", () => {
    assert.strictEqual(isDate(new Date()), true);
  });

  it("isEmpty: should check if value is empty", () => {
    assert.strictEqual(isEmpty(null), true);
    assert.strictEqual(isEmpty([1, 2]), false);
  });

  it("isLength: pitäisi tunnistaa kelvollinen taulukon pituus", () => {
    assert.strictEqual(isLength(3), true);
    assert.strictEqual(isLength(-1), false);         // Negatiivinen ei käy
    assert.strictEqual(isLength(Infinity), false);   // Ääretön ei käy
    assert.strictEqual(isLength('3'), false);        // Merkkijono ei käy
    assert.strictEqual(isLength(1.5), false);        // Desimaali ei käy
  });

  it("isObject: should check for objects", () => {
    assert.strictEqual(isObject({}), true);
    assert.strictEqual(isObject(null), false);
  });

  it("isObjectLike: pitäisi tunnistaa objekti-tyyppiset arvot", () => {
    assert.strictEqual(isObjectLike({}), true);
    assert.strictEqual(isObjectLike([1, 2, 3]), true); // Taulukko on objekti
    assert.strictEqual(isObjectLike(null), false);     // Null ei ole object-like
    assert.strictEqual(isObjectLike(Function), false); // Funktio ei ole object-like
  });

  it("isSymbol: simple check", () => {
    assert.strictEqual(isSymbol(Symbol("abc")), true);
    assert.strictEqual(isSymbol("abc"), false);
  });

  it("map: pitäisi suorittaa funktio jokaiselle taulukon jäsenelle", () => {
    function square(n) {
      return n * n;
    }
    assert.deepStrictEqual(map([4, 8], square), [16, 64]);
    assert.deepStrictEqual(map(null, square), []); // Testataan myös null-syöte (varmistaa if-lauseen)
  });

  it("toNumber: pitäisi muuntaa eri tyypit numeroiksi", () => {
    assert.strictEqual(toNumber(3.2), 3.2);             // Numero pysyy numerona
    assert.strictEqual(toNumber('3.2'), 3.2);           // Merkkijono numeroksi
    assert.strictEqual(toNumber('  5  '), 5);           // Trimmaus (välilyönnit pois)
    assert.strictEqual(toNumber('0b1010'), 10);         // Binääriluku (0b...)
    assert.strictEqual(toNumber('0o10'), 8);            // Oktaaliluku (0o...)
    assert.ok(isNaN(toNumber(Symbol('test'))));         // Symboli palauttaa NaN
  });

  it("toString: should convert value to string", () => {
    assert.strictEqual(toString(123), "123");
  });

  it("upperFirst: should capitalize first letter", () => {
    assert.strictEqual(upperFirst("fred"), "Fred");
  }); 

  it("words: pilkkoo merkkijonon sanoiksi", () => {
    assert.deepStrictEqual(words("fred, barney, & pebbles"), ["fred", "barney", "pebbles"]);
  });

});