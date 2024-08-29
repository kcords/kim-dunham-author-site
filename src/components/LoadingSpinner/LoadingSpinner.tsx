import LoadingSvg from '../../assets/icons/infinite-spinner.svg'

interface LoadingSpinnerProps {
  size?: Size
}

enum Size {
  SM = '100',
  MD = '150',
  LG = '200'
}

export const LoadingSpinner = ({size = Size.MD}: LoadingSpinnerProps) => {
  return (<div><LoadingSvg height={size} width={size}/></div>)
}

LoadingSpinner.Size = Size