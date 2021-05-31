
// užduotis:
// 1. sukurti konstruktoriaus funkciją 'notebook'. 'notebook' turi 2 parametrus: totalPages, usedPages

function notebook(totalPages, usedPages) {
    this.totalPages = totalPages;
    this.usedPages = usedPages;
}


// 2. sukurti metodą use kuris panaudotus puslapius padidina nurodytu kiekiu puslapių ir naują panaudotų puslapių skaičių atspausdina konsolėje

notebook.prototype.use = function(pages) {
    this.usedPages += pages;
    console.log("Used pages " + this.usedPages);
}


// 3. sukurti metodą leftPages kuris paskaičiuoja kiek laisvų puslapių liko ir atsakymą atspausdina konsolėje

notebook.prototype.leftPages = function(){
    this.totalPages = this.totalPages - this.usedPages;
    console.log("leftPages " + this.totalPages);
}


// 4. sukurti du notebook objektus (instances): first ir second ir juos atspausdinti

const firstNotebook = new notebook (70,20);
const secondNotebook = new notebook (90,30);


// 5. su abiem objektais išbandyti use ir leftPages metodus su abiem objektais.

console.log(firstNotebook);
console.log(secondNotebook);

firstNotebook.use(20);
secondNotebook.use(20);

firstNotebook.leftPages();
secondNotebook.leftPages();

console.log(firstNotebook);
console.log(secondNotebook)