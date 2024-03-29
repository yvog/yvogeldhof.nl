import { Dispatch, SetStateAction, createContext, useContext } from "react";

export type FacetFiltersState = {
    categories: string[];
}

export type FacetFilterType = keyof FacetFiltersState;

export type FilterState = {
    query?: string;
    facets: FacetFiltersState;
};

export type FilterContextValues = {
    filters: FilterState;
    setFilters: Dispatch<SetStateAction<FilterState>>;
    clearFilters: () => void;
};

export const FilterContext = createContext<FilterContextValues>({
    filters: {
        query: '',
        facets: {
            categories: []
        }
    },
    setFilters: () => {
        //
    },
    clearFilters: () => {
        //
    }
});

export const useFilterContext = (): FilterContextValues => useContext(FilterContext);
