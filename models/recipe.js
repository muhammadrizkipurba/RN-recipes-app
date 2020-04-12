class Recipe {
  constructor(
    id,
    categoryId,
    title,
    affordability,
    complexity,
    imageURL,
    duration,
    ingredients,
    steps,
    isSpicy
  ) {
    this.id = id;
    this.categoryId = categoryId;
    this.title = title;
    this.affordability = affordability;
    this.complexity = complexity;
    this.imageURL = imageURL;
    this.duration = duration;
    this.ingredients = ingredients;
    this.steps = steps;
    this.isSpicy = isSpicy
  }
};

export default Recipe;