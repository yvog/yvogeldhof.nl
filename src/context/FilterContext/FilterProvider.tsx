import * as React from "react";
import { useEffect, useState } from "react";
import { FilterContext, FilterState } from "./FilterContext";

export type FilterProviderProps = {
    children: React.ReactNode;
};

export const FilterProvider = (props: FilterProviderProps): JSX.Element => {
    const { children } = props;
    const [filters, setFilters] = useState<FilterState>({
        query: '',
        facets: {
            categories: []
        }
    });

    useEffect(() => {
        if (!window) return;

        const searchParams = new URLSearchParams(window.location.search);

        const searchParamsFilterState = {
            query: searchParams.get('query') ?? '',
            facets: {
                categories: searchParams.has('categories') ? decodeURI(searchParams.get('categories') ?? '').split(',') : []
            }
        };

        setFilters(searchParamsFilterState)
    }, [])

    const clearFilters = () => {
        setFilters({
            query: '',
            facets: {
                categories: []
            }
        });
    }

    return <FilterContext.Provider value={{
        filters,
        setFilters,
        clearFilters
    }}>
        {children}
    </FilterContext.Provider>;
};
