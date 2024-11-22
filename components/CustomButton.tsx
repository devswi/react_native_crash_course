import { Text, TouchableOpacity } from 'react-native'

interface Props {
  title: string
  containerStyles?: string
  textStyles?: string
  isLoading?: boolean
  handlePress?: () => void
}

function CustomButton({ isLoading, title, textStyles, containerStyles, handlePress }: Props) {
  return (
    <TouchableOpacity
      className={`bg-secondary rounded-xl min-h-[58px] justify-center items-center ${containerStyles} ${isLoading ? 'opacity-50' : ''}`}
      activeOpacity={0.7}
      onPress={handlePress}
      disabled={isLoading}
    >
      <Text className={`text-primary font-psemibold text-lg ${textStyles}`}>{title}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton
