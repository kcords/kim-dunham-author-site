import LoadingSvg from '../../assets/icons/infinite-spinner.svg'

const ARIA_LABEL = 'Loading content'
const ROLE = "progressbar"

interface LoadingSpinnerProps {
  size?: Size
}

enum Size {
  SM = '100',
  MD = '150',
  LG = '200'
}

export const LoadingSpinner = ({size = Size.MD}: LoadingSpinnerProps) =>
  (<LoadingSvg height={size} width={size} aria-label={ARIA_LABEL} role={ROLE} />)


LoadingSpinner.Size = Size