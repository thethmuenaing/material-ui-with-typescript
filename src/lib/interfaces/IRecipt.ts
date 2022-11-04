import { IInstruction } from "./IInstruction";
import { IIngredient } from "./IIngredient";

export interface IRecipe {
	recipeId: string | undefined;
	title: string;
	description: string;
	instructions: IInstruction[];
	ingredients: IIngredient[];
}

