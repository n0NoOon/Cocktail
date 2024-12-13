import type { Ingredient } from "../types/Ingredient";

interface mixture {
  ingredients: Ingredients[];
}

interface Ingredients {
  idIngredient: string;
  strIngredient: string;
  strDescription: string;
  strType: string;
  strAlcohol: string;
  strABV: string;
}

export default async function getIngredientByName(keyword: string) {
  const res = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${keyword}`
  );
  const result = (await res.json()) as mixture;
  //   console.log(result);

  const data = result.ingredients.map((d) => {
    return d;
  });

  const Ings: Ingredient[] = data.map((d) => {
    return {
      idIngredient: d.idIngredient,
      strIngredient: d.strIngredient,
      strDescription: d.strDescription,
      strType: d.strType,
      strAlcohol: d.strType,
      strABV: d.strABV,
    };
  });
  return Ings;
}
