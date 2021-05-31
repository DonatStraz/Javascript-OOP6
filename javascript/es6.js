// užduotis:

// 1. perkurti 1 užduoties kodą šį kartą naudojant ES6 klases

class notebook{
    constructor(totalPages, usedPages){
        this.totalPages = totalPages;
        this.usedPages = usedPages;
       
    }

    getUse(){
        this.usedPages += pages;
        console.log("Used pages " + this.usedPages);
    }

    getLeftPages(){
        this.totalPages = this.totalPages - this.usedPages;
        console.log("leftPages " + this.totalPages);
    }

    getInfo(){
        console.log( `this notebook has total pages of ${this.totalPages} Used pages: ${this.usedPages}`);
    
    }

    setAdd(addPages){
        this.totalPages = this.totalPages + addPages;
        console.log("Total pages" + this.totalPages);
    }

   
}

// 2. pridėti getter metodą getInfo kuris konsolėje atspausdina tokį sakinį: this notebook has total pages of \totalPages\. Used pages: \usedPages\ (pasvirieji brūkšniai žymi kur rašomos kintamojo rekšmės)
// 3. pridėti setter metodą add kuris leidžia į notebook prie esamų pridėti naujus tuščius puslapius (puslapių skaičius perduodamas parametru), bei atspausdina totalPages;

let thirdNotebook = new notebook (70,20);
let fourthNotebook = new notebook (90,30);


fourthNotebook.setAdd(80);

