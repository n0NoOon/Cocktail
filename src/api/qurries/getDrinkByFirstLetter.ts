import type { Cocktail } from "../types/Cocktail";

interface Drinks {
  drinks: Drink[];
}

interface Drink {
  idDrink: string;
  strDrink: string;
  strCategory: string;
  strAlcoholic: string;
  strGlass: string;
  strInstructions: string;
  strDrinkThumb: string;
  strIngredient1: string | null;
  strIngredient2: string | null;
  strIngredient3: string | null;
  strIngredient4: string | null;
  strIngredient5: string | null;
  strIngredient6: string | null;
  strIngredient7: string | null;
  strIngredient8: string | null;
  strIngredient9: string | null;
  strIngredient10: string | null;
  strIngredient11: string | null;
  strIngredient12: string | null;
  strIngredient13: string | null;
  strIngredient14: string | null;
  strIngredient15: string | null;
  strMeasure1: string | null;
  strMeasure2: string | null;
  strMeasure3: string | null;
  strMeasure4: string | null;
  strMeasure5: string | null;
  strMeasure6: string | null;
  strMeasure7: string | null;
  strMeasure8: string | null;
  strMeasure9: string | null;
  strMeasure10: string | null;
  strMeasure11: string | null;
  strMeasure12: string | null;
  strMeasure13: string | null;
  strMeasure14: string | null;
  strMeasure15: string | null;
}

export default async function getDrinkByFirstLetter(letter: string) {
  const res = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`
  );
  const result = (await res.json()) as Drinks;
  console.log("result", result);

  const data = result.drinks.map((d) => {
    // console.log("d", d);
    // const data: Cocktail = d;
    return d;
  });

  const drink: Cocktail[] = data.map((drink) => {
    return {
      idDrink: drink.idDrink,
      strDrink: drink.strAlcoholic,
      strCategory: drink.strCategory,
      strAlcoholic: drink.strAlcoholic,
      strGlass: drink.strGlass,
      strInstructions: drink.strInstructions,
      strDrinkThumb: drink.strDrinkThumb,
      strIngredient1: drink.strIngredient1,
      strIngredient2: drink.strIngredient2,
      strIngredient3: drink.strIngredient3,
      strIngredient4: drink.strIngredient4,
      strIngredient5: drink.strIngredient5,
      strIngredient6: drink.strIngredient6,
      strIngredient7: drink.strIngredient7,
      strIngredient8: drink.strIngredient8,
      strIngredient9: drink.strIngredient9,
      strIngredient10: drink.strIngredient10,
      strIngredient11: drink.strIngredient11,
      strIngredient12: drink.strIngredient12,
      strIngredient13: drink.strIngredient13,
      strIngredient14: drink.strIngredient14,
      strIngredient15: drink.strIngredient15,
      strMeasure1: drink.strMeasure1,
      strMeasure2: drink.strMeasure2,
      strMeasure3: drink.strMeasure3,
      strMeasure4: drink.strMeasure4,
      strMeasure5: drink.strMeasure5,
      strMeasure6: drink.strMeasure6,
      strMeasure7: drink.strMeasure7,
      strMeasure8: drink.strMeasure8,
      strMeasure9: drink.strMeasure9,
      strMeasure10: drink.strMeasure10,
      strMeasure11: drink.strMeasure11,
      strMeasure12: drink.strMeasure12,
      strMeasure13: drink.strMeasure13,
      strMeasure14: drink.strMeasure14,
      strMeasure15: drink.strMeasure15,
    };
  });
  return drink;
}
