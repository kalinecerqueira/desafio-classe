class hero{
	constructor(heroName, heroAge, heroType){
    	this.heroName = heroName
        this.heroAge = heroAge
        this.heroType = heroType
    }

    ataque(){
    
    let attackHero;

    switch(this.heroType){
        case "mago":
            attackHero = "magia"
        break

        case "guerreiro":
            attackHero = "espada"
        break

        case "monge":
            attackHero = "artes marciais"
        break

        default:
            attackHero = "shuriken"
                
    }

    console.log(`O ${this.heroType} atacou usando ${attackHero}`)
}
    }

