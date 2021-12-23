describe("Les tableaux", function() {

  it('Créer un tableau à partir d\'une chaîne de caractères.', function () {

    let tests = [
      {arg: 'html, javascript, php, css, ruby', res: ['html', 'javascript', 'php', 'css', 'ruby']},
      {arg: 'python, react', res: ['python', 'react']},
      {arg: 'angular', res: ['angular']},
      {arg: 'redux, bootstrap', res: ['redux', 'bootstrap']},
      {arg: 'Sass, Go, C#, Shell, C++, Java, SQL, jQuery', res: ['Sass', 'Go', 'C#', 'Shell', 'C++', 'Java', 'SQL', 'jQuery']}
    ];
    
    for (let test of tests) {
      expect(test.res).toEqual(createArr(test.arg));
    }

  });

  it('Créer un tableau de nombres à partir d\'un intervalle.', function () {

    let tests = [
      {arg: [0, 5], res: [0, 1, 2, 3, 4, 5]},
      {arg: [1, 4], res: [1, 2, 3, 4]},
      {arg: [10, 20], res: [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]},
      {arg: [3, 4], res: [3, 4]},
      {arg: [5, 11], res: [5, 6, 7, 8, 9, 10, 11]}
    ];
    
    for (let test of tests) {
      expect(test.res).toEqual(createArrNum(test.arg[0], test.arg[1]));
    }

  });

  it('Remplacer un élément du tableau par un autre.', function () {

    let tests = [
      {arg: [['js', 'css'], 0, 'php'], res: ['php', 'css']},
      {arg: [['ruby', 'php', 'python', 'go'], 3, 'c#'], res: ['ruby', 'php', 'python', 'c#']},
      {arg: [['ruby', 'c#', 'python', 'go'], 1, 'c++'], res: ['ruby', 'c++', 'python', 'go']},
      {arg: [['css', 'go', 'js'], 4, 'php'], res: ['css', 'go', 'js', undefined, 'php']},
      {arg: [['js', 'C#', 'css'], 8, 'C++'], res: ['js', 'C#', 'css', undefined, undefined, undefined, undefined, undefined,'C++']},
    ];
    
    for (let test of tests) {
      expect(test.res).toEqual(replaceIndex (test.arg[0], test.arg[1], test.arg[2]));
    }

  });

  it('Fusionner deux tableaux en gardant l\'ordre des éléments', function () {

    let tests = [
      {arg: [['ruby', 'python'], ['css', 'js']], res: ['ruby', 'python', 'css', 'js']},
      {arg: [['C#'], ['php', 'Go', 'C++', 'Sass']], res: ['C#', 'php', 'Go', 'C++', 'Sass']},
      {arg: [['php', 'Go', 'C++', 'Sass'], ['C#']], res: [ 'php', 'Go', 'C++', 'Sass', 'C#']},
      {arg: [[], ['React']], res: ['React']},
      {arg: [['Redux'], []], res: ['Redux']}
    ];
    
    for (let test of tests) {
      expect(test.res).toEqual(concateArray(test.arg[0], test.arg[1]));
    }

  });

  it('Ajouter des nombres à partir d\'un intervalle en début de tableau.', function () {

    let tests = [
      {arg: [5, 0, [0, 1, 2, 3, 4, 5]], res: [5, 4, 3, 2, 1, 0, 0, 1, 2, 3, 4, 5]},
      {arg: [4, 1, [1, 2, 3, 4]], res: [4, 3, 2, 1, 1, 2, 3, 4]},
      {arg: [3, 1, [10, 20]], res: [3, 2, 1, 10, 20]},
      {arg: [2, 1, [3, 4]], res: [2, 1, 3, 4]},
      {arg: [-1, -4, [5, 11]], res: [-1, -2, -3, -4, 5, 11]}
    ];
    
    for (let test of tests) {
      expect(test.res).toEqual(addNumsArr(test.arg[0], test.arg[1], test.arg[2]));
    }

  });

  it('Ajouter les éléments d\'un tableau dans un autre.', function () {

    let tests = [
      {arg: [0, [1], [2, 3, 4]], res: [1, 2, 3, 4]},
      {arg: [2, [2, 3], [0, 1, 4, 5, 6]], res: [0, 1, 2, 3, 4, 5, 6]},
      {arg: [5, [false, false], [true, false, true, false, undefined, undefined, true, true]], res: [true, false, true, false, undefined, false, false, undefined, true, true]},
      {arg: [-1, ["c"], ["a", "b", "d"]], res: ["a", "b","c", "d"]},
      {arg: [-2, ["b", "c", "d", "e", "f"], ["a", "g", "h"]], res: ["a", "b", "c", "d", "e", "f", "g", "h"]},
    ];
    
    for (let test of tests) {
      expect(test.res).toEqual(addItem (test.arg[0], test.arg[1], test.arg[2]));
    }

  });

  it('Modifier une portion de tableau.', function () {

    let tests = [
      {arg: [0, [1, 2, 3], [undefined, undefined, undefined, 4]], res: [1, 2, 3, 4]},
      {arg: [2, [true, true], [false, false, false, false, false, false]], res: [false, false, true, true, false, false]},
      {arg: [4, ["e", "f", "g", "h"], ["a", "b", "c", "d", "d"]], res: ["a", "b", "c", "d", "e", "f", "g", "h"]},
      {arg: [-1, [1, 2, 3, 4, 5], [0, 1]], res: [0, 1, 2, 3, 4, 5]},
      {arg: [1, [1, 2], [0, "x", "x", 3, 4]], res: [0, 1, 2, 3, 4]},
    ];
    
    for (let test of tests) {
      expect(test.res).toEqual(editItem(test.arg[0], test.arg[1], test.arg[2]));
    }

  });
  
  it('Transformer un tableau en chaîne de caractères.', function () {

    let tests = [
      {arg: ['js', 'css', 'php'], res: 'js, css, php'},
      {arg: ['ruby', 'php', 'python', 'go'], res: 'ruby, php, python, go'},
      {arg: ['ruby', 'c#', 'python', 'go', 'c++'], res: 'ruby, c#, python, go, c++'},
      {arg: ['CSS', 'C#', 'Go', 'Sass', 'jQuery', 'Jasmine', 'Angular', 'React'], res: 'CSS, C#, Go, Sass, jQuery, Jasmine, Angular, React'},
      {arg: ['css', 'go', 'js', 'php'], res: 'css, go, js, php'},
    ];
    
    for (let test of tests) {
      expect(test.res).toEqual(arrayToString(test.arg));
    }

  });
  
  it('Trier les éléments d\'un tableau par ordre alphabétique.', function () {

    let tests = [
      {arg: ['js', 'css', 'php'], res: ["css", "js", "php"]},
      {arg: ['ruby', 'php', 'python', 'go'], res: ["go", "php", "python", "ruby"]},
      {arg: [8, 9, 5, 0, 35, 85, 18], res: [0, 18, 35, 5, 8, 85, 9]},
      {arg: ['CSS', 0, 'Go', 'Sass', 78, 'Jasmine', 5, 'React'], res: [0, 5, 78, "CSS", "Go", "Jasmine", "React", "Sass"]},
      {arg: ['css', 'go', 'js', 'php'], res: ["css", "go", "js", "php"]},
    ];
    
    for (let test of tests) {
      expect(test.res).toEqual(sortArray(test.arg));
    }

  });

  it('Inverser l\'ordre des éléments d\'un tableau.', function () {

    let tests = [
      {arg: ['js', 'css', 'php'], res: ["php", "css", "js"]},
      {arg: ['ruby', 'php', 'python', 'go'], res: ["go", "python", "php", "ruby"]},
      {arg: [8, 9, 5, 0, 35, 85, 18], res: [18, 85, 35, 0, 5, 9, 8]},
      {arg: ['CSS', 0, 'Go', 'Sass', 78, 'Jasmine', 5, 'React'], res: ["React", 5, "Jasmine", 78, "Sass", "Go", 0, "CSS"]},
      {arg: ['css', 'go', 'js', 'php'], res: ["php", "js", "go", "css"]},
    ];
    
    for (let test of tests) {
      expect(test.res).toEqual(reverseArray(test.arg));
    }
      
  });
  
});