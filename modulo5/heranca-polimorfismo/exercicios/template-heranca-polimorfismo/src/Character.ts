export class Character {

  private name: string;
  private strength: number;
  private defense: number;
  private health: number
  public static MAX_HEALTH = 100

  constructor(
    name: string,
    strength: number,
    defense: number
  ) {
    this.name = name;
    this.strength = strength;
    this.defense = defense
    this.health = Character.MAX_HEALTH
  }

  attack = (enemy: Character) => {

    const damage = this.strength - enemy.defense

    if (damage > 0) {
      enemy.health -= damage
    }
  }

  restore = () => {
    this.health = Character.MAX_HEALTH
  }
}