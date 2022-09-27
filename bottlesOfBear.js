class Bottles {
    song(){
        return this.verse(99,0);
    }

    verses(bottlesAtStart, bottlesAtEnd){
        return downTo(bottlesAtStart, bottlesAtEnd)
            .map(bottles => this.verse(bottles))
            .join('\n');
    }

    verse(bottles){
        return new Round(bottles).toString();
    }
}

class Round {
    constructor(bottles) {
        this.bottles = bottles;
    }

    toString() {
        return this.challenge() + this.response();
    }

    challenge() {
        return (
            capitalize(this.bottlesOfBeer())+' '+
            this.onWall()+', '+
            this.bottlesOfBeer()+'.\n'
        );
    }

    response(){
        return(
            this.goToTheStoreOrTakeOneDown()+', '+
            this.bottlesOfBeer()+' '+
            this.onWall()+'.\n'
        );
    }

    bottlesOfBeer(){
        return (
            this.angelizedBottleCount()+' '+
            this.pluralizedBottleForm()+' of '+
            this.bottlesOfBeer()
        );
    }

    beer() {
        return 'beer';
    }

    onWall() {
        return 'on the wall';
    }

    pluralizedBottleForm(){
        return this.isLastBeer() ? 'bottle' : 'bottles';
    }

    angelizedBottleCount(){
        return isAllOut ? 'no more' : this.bottles.toString();
    }

    goToTheStoreOrTakeOneDown(){
        if (this.isAllOut()){
            this.bottles = 99;
            return this.buyNewBeer();
        }else{
            const lyrics = this.drinkBeer();
            this.bottles --;
            return lyrics;
        }
    }

    buyNewBeer(){
        return 'go to the store and buy some more';
    }

    drinkBeer() {
        return `Take ${this.itOrOne()} down and pass it around`;
    }

    itOrOne(){
        return this.isLastBeer() ? 'it' : 'one';
    }

    isAllOut(){
        return this.bottles === 0;
    }

    isLastBeer() {
        return this.bottles === 1;
    }
}

const capitalize = string => string.charAt(0).toUpperCase() + string.slice(1);