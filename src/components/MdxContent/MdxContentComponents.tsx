import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

export const MdxContentComponents = {
  a: (props: any) => {
    const { href, children } = props;

    return (
      <Link href={href} color="primary" underline="hover" target="_blank">
        {children}
      </Link>
    );
  },
  h1: (props: any) => (
    <Typography variant="h1" component="h1" color="primary" sx={{ mt: 4 }}>
      {props.children}
    </Typography>
  ),
  h2: (props: any) => (
    <Typography variant="h2" component="h2" color="primary" sx={{ mt: 4 }}>
      {props.children}
    </Typography>
  ),
  h3: (props: any) => (
    <Typography variant="h3" component="h3" color="textPrimary" sx={{ mt: 4 }}>
      {props.children}
    </Typography>
  ),
  h4: (props: any) => (
    <Typography variant="h4" component="h4" sx={{ mt: 4 }}>
      {props.children}
    </Typography>
  ),
  h5: (props: any) => (
    <Typography variant="h5" component="h5" sx={{ mt: 4 }}>
      {props.children}
    </Typography>
  ),
  h6: (props: any) => (
    <Typography variant="h6" component="h6" sx={{ mt: 4 }}>
      {props.children}
    </Typography>
  ),
};
