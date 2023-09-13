import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import { Box, IconButton, Popover, TextField, debounce } from '@mui/material';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useRef, useState } from 'react';
import { FacetFilterType, useFilterContext } from '../../context/FilterContext/FilterContext';
import { Post } from '../../types';
import { toggleURLSearchParam } from '../../util/url';
import { ArrayFacetFilter } from './FacetFilter/ArrayFacetFilter/ArrayFacetFilter';

type FiltersProps = {
    posts: Post[];
    onPostsFiltered: (posts: Post[]) => void;
}

export const Filters = ({
    posts,
    onPostsFiltered
}: FiltersProps) => {
    const [facetsOpened, setFacetsOpened] = useState<boolean>(false);
    const [searchQuery, setSearchQuery] = useState<string>();

    const filterIconButtonRef = useRef(null);

    const { filters, setFilters } = useFilterContext();
    const { asPath, replace: replaceRoute } = useRouter()

    useEffect(() => {
        let filteredPosts = posts;

        if (filters.query) {
            const queryWords = filters.query.toLowerCase().split(' ')

            filteredPosts = filteredPosts.filter((post) => {
                if (!post.meta) return undefined;

                const postTitleWords = post.meta?.title.toLowerCase().split(' ');

                return queryWords.every((queryWord) => postTitleWords.includes(queryWord))
            });
        }

        if (filters.facets) {
            for (const key in filters.facets) {
                let type = key as FacetFilterType;
                let filterFacetTypeValue = filters.facets[type];

                if (Array.isArray(filterFacetTypeValue) && filterFacetTypeValue.length > 0) {
                    filteredPosts = filteredPosts.filter((post) => {
                        if (!post.meta || !post.meta[type]) {
                            return undefined;
                        }

                        return post.meta[type].some((item) => filterFacetTypeValue.includes(item))
                    });
                }
            }
        }

        onPostsFiltered(filteredPosts);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [filters.query, filters.facets])

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const onSearchQueryChange = useCallback(
        debounce((e: any) => {
            const query = e.target.value;

            setFilters({
                ...filters,
                query
            })

            const search = toggleURLSearchParam('query', query, query.trim());
            replaceRoute(asPath, { search });
        }, 300),
        [asPath, filters]
    );

    return <Box sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 2,
        mt: 4,
    }}>
        <Box sx={{
            flex: 1
        }}>
            <TextField
                id='search'
                label='Search by title'
                title='Search by title'
                sx={{
                    width: '100%'
                }}
                inputProps={{
                    value: searchQuery ?? filters.query
                }}
                onChange={(e) => {
                    setSearchQuery(e.target.value);
                    onSearchQueryChange(e);
                }}
            />
        </Box>
        <Box>
            <IconButton aria-label="filters" onClick={() => setFacetsOpened(true)} ref={filterIconButtonRef} color='primary' title='Toggle filters'>
                <FilterAltOutlinedIcon fontSize='medium' />
            </IconButton>

            <Popover
                id="filters"
                open={facetsOpened}
                anchorEl={filterIconButtonRef.current}
                onClose={() => setFacetsOpened(false)}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
            >
                <Box sx={{
                    px: 3,
                    py: 2,
                }}>
                    <ArrayFacetFilter
                        type='categories'
                        id='filter-categories'
                        title='Categories'
                        posts={posts}
                    />
                </Box>
            </Popover>
        </Box>
    </Box>
}