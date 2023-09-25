import Typography from "@mui/material/Typography";
import { Theme } from "@mui/material";
import { BackToPosts } from '../BackToPosts/BackToPosts'

export const NotFound = () =>
  <>
    <Typography variant="h2" component="h2" sx={(theme: Theme) => ({
      margin: `${theme.spacing(4)} 0 ${theme.spacing(4)} 0`,
    })}>
      Page not found
    </Typography>

    <BackToPosts
      sx={(theme: Theme) => ({
        margin: `0 0 ${theme.spacing(4)} 0`
      })}
    />
  </>
