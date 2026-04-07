# Student template

## Purpose of this repository

This is a project template for students participating in Software Testing course
at LAB University of Applied Sciences.

The repository only contains the source code that is under testing, `package.json` skeleton
and LICENSE file.

Source code folder contains a separate license file that must **NOT** be removed under any circumstances!
Removing this license file directly violates terms and conditions of the software under testing.
Individuals who remove or modify the license file will also carry the consequences.

## Päivitys testaukseen / Testing Update (2026)

Tämä projektipohja on päivitetty sisältämään kattavan yksikkötestausympäristön.

### Suoritetut toimenpiteet:
- **Testauskehys:** Asennettu ja määritetty `Mocha` ja `Assert`.
- **Kattavuusmittaus:** Otettu käyttöön `C8`-työkalu koodikattavuuden (Code Coverage) seuraamiseksi.
- **Konfiguraatio:** `package.json` on säädetty raportoimaan kattavuus koko `src`-kansiosta (`all: true`).

### Testien ajaminen:
Testit voidaan ajaa komennolla:
```bash
npm test