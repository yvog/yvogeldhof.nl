import ArrowBackIos from '@mui/icons-material/ArrowBackIos';
import { ButtonProps, Theme } from '@mui/material';
import Button from '@mui/material/Button';
import { mergeSx } from '../../util/mergeSx';

type BackToPostsProps = Pick<ButtonProps, 'sx'>;

export const BackToPosts = (props: BackToPostsProps) => {
  const { sx } = props;

  return (
    <Button
      color="primary"
      aria-label="Back to posts"
      href="/"
      sx={mergeSx(
        (theme: Theme) => ({
          margin: `${theme.spacing(2.5)} 0 ${theme.spacing(1)} 0`,
          transform: `translateX(-${theme.spacing(1)})`,
        }),
        sx
      )}
    >
      <ArrowBackIos
        sx={{
          width: 16,
          height: 16,
        }}
      />
      Back to posts
    </Button>
  );
};
