import Checkbox from "@mui/material/Checkbox";
import Divider from "@mui/material/Divider";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import Typography from "@mui/material/Typography";
import { useRouter } from 'next/router';
import { useCallback } from 'react';
import { FacetFilterType, useFilterContext } from '../../../../context/FilterContext/FilterContext';
import { Post, PostMeta } from '../../../../types';
import { toggleURLSearchParam } from '../../../../util/url';

type ArrayFacetFilterProps = {
    type: FacetFilterType;
    id: string;
    title: string;
    posts: Post[];
}

export const ArrayFacetFilter = ({
    id,
    title,
    type,
    posts
}: ArrayFacetFilterProps) => {
    const { filters, setFilters } = useFilterContext();
    const { asPath, replace: replaceRoute } = useRouter()

    const onCheckboxFacetFilterChange = useCallback((type: FacetFilterType, checked: boolean, filterValue: string) => {
        const currentState = filters.facets[type];
        let newState = [...currentState];

        if (checked) {
            newState.push(filterValue);
        } else {
            newState = currentState.filter(value => value !== filterValue);
        }

        setFilters({
            ...filters,
            facets: {
                ...filters.facets,
                [type]: newState
            }
        })

        const search = toggleURLSearchParam(type, newState.join(','), newState.length > 0);
        replaceRoute(asPath, { search });

    }, [asPath, filters, replaceRoute, setFilters]);

    const postMetaTypeItems = posts
        .filter(post => post.meta && post.meta[type]?.length > 0)
        .map((post) => {
            const items = (post.meta as PostMeta)[type];
            return items.map(c => `${c[0].toUpperCase()}${c.slice(1)}`);
        })
        .flat()
        .sort()

    const distinctPostMetaTypeItems = [...new Set(postMetaTypeItems)]

    return <>
        <Typography variant='body1' sx={{
            opacity: 0.4
        }}>
            {title}
        </Typography>

        <Divider sx={{
            mt: 1.5,
            mb: 1,
        }} />

        <FormGroup sx={{
            display: 'flex',
            gap: 0.5,
        }}>
            {distinctPostMetaTypeItems.map((item) =>
                <FormControlLabel
                    key={`ArrayFacetFilter-${id}-${item}`}
                    checked={filters.facets[type].includes(item)}
                    label={item}
                    control={
                        <Checkbox
                            inputProps={{
                                'aria-label': item,
                                'title': `Filter ${item}`
                            }}
                            sx={{
                                mr: 0.5
                            }}
                            onChange={(e, state) => onCheckboxFacetFilterChange(type, state, item)}
                        />
                    }
                />
            )}
        </FormGroup>
    </>
}