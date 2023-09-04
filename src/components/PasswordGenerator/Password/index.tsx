import { Autorenew, ContentCopy } from '@mui/icons-material'
import { Box, IconButton, Typography, useTheme } from '@mui/material'

type PasswordProps = {
  password: string
  onClick: () => void
}

export const Password = ({ password, onClick }: PasswordProps) => {
  const theme = useTheme()

  const handleCopy = () => {
    navigator.clipboard.writeText(password)
    alert('Copied!')
  }

  return (
    <Box
      sx={{
        p: theme.spacing(2),
        pt: theme.spacing(3),
        background: theme.palette.secondary.main,
        color: theme.palette.secondary.contrastText,
        borderRadius: theme.spacing(2),
        boxShadow: theme.shadows[5],
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: theme.spacing(1),
      }}
    >
      <Typography
        variant="h4"
        sx={{
          height: theme.spacing(18),
          p: {
            xs: 0,
            sm: theme.spacing(2),
            md: theme.spacing(2),
          },
          wordBreak: 'break-all',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        {password}
      </Typography>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          gap: theme.spacing(1),
        }}
      >
        <IconButton
          color="primary"
          onClick={handleCopy}
          aria-label="copy password"
        >
          <ContentCopy sx={{ fontSize: { xs: 30, sm: 30, md: 40 } }} />
        </IconButton>
        <IconButton
          color="primary"
          onClick={onClick}
          aria-label="regenerate password"
        >
          <Autorenew sx={{ fontSize: { xs: 30, sm: 30, md: 40 } }} />
        </IconButton>
      </Box>
    </Box>
  )
}
