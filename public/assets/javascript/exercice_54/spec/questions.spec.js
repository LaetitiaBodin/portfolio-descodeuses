describe('Les chaînes de caractères : ', function () {

    it("Donner la taille d'une chaîne de caractères", function () {

      let tests = [
        {arg: 'welcome', res: 7},
        {arg: 'hello', res: 5},
        {arg: 'hello world!', res: 12},
        {arg: "Pomme de Reinette et Pomme d'Api...", res: 35},
        {arg: 'HTML5? CSS3? JS6?', res: 17}
      ];
      
      for (let test of tests) {
        expect(test.res).toBe(stringLength(test.arg));
      }

    });

    it("Remplacer le premier e d'une chaîne par une espace", function () {

      let tests = [
        {arg: 'hello hello', res: 'h llo hello'},
        {arg: 'hello world!', res: 'h llo world!'},
        {arg: 'Eee', res: ' ee'},
        {arg: 'Hello, Dolly!', res: 'H llo, Dolly!'},
        {arg: 'Doctor Jekyll & Mister Hyde', res: 'Doctor J kyll & Mister Hyde'}
      ];
      
      for (let test of tests) {
        expect(test.res).toBe(replaceFirstE(test.arg));
      }

    });
    
    it('Concatener deux chaînes de caractères', function () {

      let tests = [
        {arg: ['hello ', 'world'], res: 'hello world'},
        {arg: ['lorem', 'ipsum'], res: 'loremipsum'},
        {arg: [' lorem ipsum ', ' hello world '], res: ' lorem ipsum  hello world '},
        {arg: ['tadadi ;', ' tidada !'], res: 'tadadi ; tidada !'},
        {arg: ['De A ', 'à Z...'], res: 'De A à Z...'}
      ];
      
      for (let test of tests) {
        expect(test.res).toBe(concatenate(test.arg[0], test.arg[1]));
      }

    });
    
    it("Afficher le cinquième caractère d'une chaîne", function () {

      let tests = [
        {arg: 'Cendrillon', res: 'r'},
        {arg: 'Abracadabra', res: 'c'},
        {arg: 'bip', res: ''},
        {arg: "Pomme de Reinette et Pomme d'Api...", res: 'e'},
        {arg: "Alors, c'est 1 ou 2?", res: 's'}
      ];
      
      for (let test of tests) {
        expect(test.res).toBe(whichCharAt4(test.arg));
      }

    });
    
    it("Afficher les 9 premiers caractères d'une chaîne de caractères", function () {

      let tests = [
        {arg: 'Abracadabra', res: 'Abracadab'},
        {arg: 'lorem ipsum', res: 'lorem ips'},
        {arg: 'hello', res: 'hello'},
        {arg: 'To be, or not to be, that is the question[...]', res: 'To be, or'},
        {arg: 'Tél : 01.02.03.04.05', res: 'Tél : 01.'}
      ];
      
      for (let test of tests) {
        expect(test.res).toBe(stringSlice(test.arg));
      }

    });
    
    it('Mettre en majuscule la chaîne', function () {

      let tests = [
        {arg: 'hello world', res: 'HELLO WORLD'},
        {arg: 'Lorem IpSuM', res: 'LOREM IPSUM'},
        {arg: 'BiBiDiBaBiDiBou!', res: 'BIBIDIBABIDIBOU!'},
        {arg: 'Grand i ou petit l?', res: 'GRAND I OU PETIT L?'},
        {arg: 'A mort, Louis Croix-Vé-Bâton !', res: 'A MORT, LOUIS CROIX-VÉ-BÂTON !'}
      ];
      
      for (let test of tests) {
        expect(test.res).toBe(stringToUppercase(test.arg));
      }

    });
    
    it('Mettre en minuscule la chaîne', function () {

      let tests = [
        {arg: 'HELLO WORLD', res: 'hello world'},
        {arg: 'Lorem IpSuM', res: 'lorem ipsum'},
        {arg: 'BiBiDiBaBiDiBou!', res: 'bibidibabidibou!'},
        {arg: 'I, II, III, IV, etc.', res: 'i, ii, iii, iv, etc.'},
        {arg: 'Pas de majuscules, on a dit !!!', res: 'pas de majuscules, on a dit !!!'}
      ];
      
      for (let test of tests) {
        expect(test.res).toBe(stringToLowerCase(test.arg));
      }
    
    });

    it('Supprimer les espaces avant et après la chaîne', function () {

      let tests = [
        {arg: ' welcome ', res: 'welcome'},
        {arg: ' h e l l o ', res: 'h e l l o'},
        {arg: 'hello world!', res: 'hello world!'},
        {arg: '               To be, or not to be, that is the question[...]             ', res: 'To be, or not to be, that is the question[...]'},
        {arg: 'Tél : 01.02.03.04.05', res: 'Tél : 01.02.03.04.05'}
      ];
      
      for (let test of tests) {
        expect(test.res).toBe(stringTrim(test.arg));
      }

    });

    it("Afficher true si le paramètre d'entrée de la fonction est de type string", function () {

      let tests = [
        {arg: 'Hello World!', res: true},
        {arg: 'Patati et patata...', res: true},
        {arg: 27.56, res: false},
        {arg: '15', res: true},
        {arg: '22 + 78', res: true}
      ];
      
      for (let test of tests) {
        expect(test.res).toBe(isString(test.arg));
      }

    });

    it("Afficher l'extension du fichier", function () {

      let tests = [
        {arg:'hello_world.pdf', res: 'pdf'},
        {arg:'lorem ipsum.rar', res:'rar' },
        {arg:'48exos.de-js.et.cest.tout.zip', res: 'zip'},
        {arg:'pas-top.zip.rar.txt', res: 'txt'},
        {arg:'a.img', res: 'img'}
      ];
      
      for (let test of tests) {
        expect(test.res).toBe(fileExt(test.arg));
      }

    });

    it("Compter le nombre d'espaces dans la chaîne", function () {

      let tests = [
        {arg:'hello world', res: 1},
        {arg:' lorem impsum ', res: 3},
        {arg:'blabla', res: 0},
        {arg:' h e l l o, w o r l d!', res: 10},
        {arg:'Des                          espaces !', res: 27},
      ];
      
      for (let test of tests) {
        expect(test.res).toBe(numSpaces(test.arg));
      }
    
    });

    it('Inverser une chaîne de caractères', function () {

      let tests = [
        {arg: 'hello world', res: 'dlrow olleh'},
        {arg: '87', res: '78'},
        {arg: 'blabla', res: 'albalb'},
        {arg: 'Ecrit Comme De Vinci...', res: '...icniV eD emmoC tircE'},
        {arg: "C'est pas ça, un palindrome !", res: "! emordnilap nu ,aç sap tse'C"}
      ];
      
      for (let test of tests) {
        expect(test.res).toBe(stringReverse(test.arg));
      }
    
    });

});