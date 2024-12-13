import type { GetDrink } from "../../types/GetDrink";

interface Drinks {
  drinks: Drink[];
}
interface Drink {
  strDrink: string;
  strDrinkThumb: string;
  idDrink: string;
}

export default async function searchByIngredient(keyword: string) {
  const res = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${keyword}`
  );
  const result = (await res.json()) as Drinks;
  const data = result.drinks.map((d) => {
    return d;
  });

  const drink: GetDrink[] = data.map((drink) => {
    return {
      strDrink: drink.strDrink,
      strDrinkThumb: drink.strDrinkThumb,
      idDrink: drink.idDrink,
    };
  });
  return drink;
}
