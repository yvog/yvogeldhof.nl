import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Theme } from '@mui/material';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { formatDateString } from '../../util/dates';
import { MdxContentComponents } from './MdxContentComponents';

type MdxContentProps = {
  title: string;
  date: string;
  source: MDXRemoteSerializeResult;
};

export const MdxContent = (props: MdxContentProps) => {
  const { source, title, date } = props;

  return (
    <Box
      sx={(theme: Theme) => ({
        margin: `${theme.spacing(1)} 0 ${theme.spacing(1)} 0`,
        wordBreak: 'break-word',
        overflow: 'hidden',
        '& > h1, h2, h3, h4, h5, h6': {
          color: theme.palette.primary.main,
        },
      })}
    >
      <Typography variant="caption" component="div">
        {formatDateString(date)}
      </Typography>

      <Typography variant="h1" component="h1">
        {title}
      </Typography>
      <MDXRemote {...source} components={MdxContentComponents} />
    </Box>
  );
};
