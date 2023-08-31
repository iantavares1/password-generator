import { Box, Checkbox, Typography, useTheme } from '@mui/material'

type CheckboxProps = {
  name: string
  checked: boolean
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const CustomCheckbox = ({ name, checked, onChange }: CheckboxProps) => {
  const theme = useTheme()
  const upperCaseName = name[0].toUpperCase() + name.slice(1, name.length)

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: theme.spacing(2) }}>
      <Checkbox checked={checked} name={name} onChange={onChange} />
      <Typography variant="h4">{upperCaseName}</Typography>
    </Box>
  )
}
