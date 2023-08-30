import { Autorenew, ContentCopy } from '@mui/icons-material'
import { Box, IconButton, Typography, useTheme } from '@mui/material'

type PasswordProps = {
  password: string
  handleCopy: () => void
  generatePassword: () => void
}

export const Password = ({
  password,
  handleCopy,
  generatePassword,
}: PasswordProps) => {
  const theme = useTheme()
  return (
    <Box
      sx={{
        padding: theme.spacing(3),
        background: theme.palette.secondary.main,
        color: theme.palette.secondary.contrastText,
        borderRadius: theme.spacing(2),
        boxShadow: theme.shadows[5],
        display: 'flex',
        flexDirection: { sm: 'column', md: 'row' },
        alignItems: { sm: 'center' },
        justifyContent: 'space-between',
      }}
    >
      <Typography
        variant="h3"
        sx={{
          height: theme.spacing(22),
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
          flexDirection: { sm: 'row', md: 'column' },
          justifyContent: 'center',
          gap: theme.spacing(1),
        }}
      >
        <IconButton
          color="primary"
          onClick={handleCopy}
          aria-label="copy password"
        >
          <ContentCopy sx={{ fontSize: { sm: 30, md: 45 } }} />
        </IconButton>
        <IconButton
          color="primary"
          onClick={generatePassword}
          aria-label="regenerate password"
        >
          <Autorenew sx={{ fontSize: { sm: 30, md: 45 } }} />
        </IconButton>
      </Box>
    </Box>
  )
}
