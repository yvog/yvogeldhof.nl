import { Link, Typography } from '@mui/material'

export const MdxContentComponents = {
  a: (props: any) => {
    const { href, children } = props

    return (
      <Link href={href} color="primary" underline="hover" target="_blank">
        {children}
      </Link>
    )
  },
  h2: (props: any) => (
    <Typography variant="h3" component="h2" sx={{ mt: 4 }}>
      {props.children}
    </Typography>
  ),
  h3: (props: any) => (
    <Typography variant="h4" component="h3" sx={{ mt: 4 }}>
      {props.children}
    </Typography>
  ),
}
