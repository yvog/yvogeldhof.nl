import { Link as MuiLink, LinkProps as MuiLinkProps, Theme } from '@mui/material';
import Link from 'next/link';
import { NextRouter, useRouter } from 'next/router';
import React, { useMemo } from 'react';
import { mergeSx } from '../../util/mergeSx';

type RouteLinkProps = {
    href: string;
    children: React.ReactNode;
    isActive?: (router: NextRouter) => boolean;
} & MuiLinkProps;

export const RouteLink = ({ href, children, sx, isActive, ...muiLinkProps }: RouteLinkProps) => {
    const router = useRouter()
    const activeLink = useMemo(() => isActive?.(router), [isActive, router])

    const link = <MuiLink
        component={activeLink ? 'span' : 'a'}
        fontWeight={400}
        underline="none"
        color="primary"
        sx={mergeSx((theme: Theme) => ({
            display: 'block',
            position: 'relative',
            py: 0.5,
            transition: 'color .2s .05s ease-in-out',
            '&:after': {
                content: '""',
                position: 'absolute',
                bottom: 0,
                left: `-${theme.spacing(1.5)}`,
                width: 0,
                height: 1,
                background: theme.palette.primary.main,
                borderRadius: theme.spacing(0.5),
                transition: 'width .2s ease-in-out',
                zIndex: -1,
                ...(activeLink && {
                    background: theme.palette.secondary.main,
                    width: `calc(100% + (${theme.spacing(1.5)} * 2))`
                }),
            },
            ...(activeLink && {
                color: theme.palette.background.default,
            }),
            ...(!activeLink && {
                '&:hover': {
                    color: theme.palette.background.default,
                    '&:after': {
                        background: theme.palette.secondary.main,
                        width: `calc(100% + (${theme.spacing(1.5)} * 2))`
                    }
                },
                '&:active': {
                    color: theme.palette.background.default
                }
            })
        }), sx)}
        {...muiLinkProps}
    >
        {children}
    </MuiLink>

    if (activeLink) {
        return link
    }

    return (
        <Link href={href} passHref>
            {link}
        </Link>
    )
}