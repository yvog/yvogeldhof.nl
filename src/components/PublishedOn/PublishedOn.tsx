import { Typography, TypographyProps } from '@mui/material'

type PublishedOnProps = Pick<TypographyProps, 'className'> & {
  date: string
}

export const PublishedOn = (props: PublishedOnProps) => {
  const { date, ...typographyProps } = props
  const formatter = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
  const formattedDate = formatter.format(new Date(date))

  return (
    <Typography variant="caption" component="div" {...typographyProps}>
      {formattedDate}
    </Typography>
  )
}
