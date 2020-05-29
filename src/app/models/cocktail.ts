export interface iCocktail {
    idDrink: number;
    strDrink: string;
    strCategory: string;
    strGlass: string;
    strInstructionsES: string;
    strIngredient1?: string;
    strAlcoholic: string;
}

export interface iCategories{
    strCategory:string;
}

export interface iGlasses{
    strGlass:string;
}

export interface iIngredient{
    strIngredient1:string;
}

export interface iAlcoholic{
    strAlcoholic:string;
}