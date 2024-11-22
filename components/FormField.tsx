import type { KeyboardTypeOptions } from 'react-native'
import { icons } from '@/constants'
import { useState } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'

interface Props {
  title: string
  value: string
  placeholder?: string
  containerStyles?: string
  password?: boolean
  keyboardType?: KeyboardTypeOptions
  handleChangeText?: (e: string) => void
}

function FormField({ title, password, value, containerStyles, placeholder, handleChangeText, ...props }: Props) {
  const [showPassword, setShowPassword] = useState(false)
  const [focus, setFocus] = useState(false)

  return (
    <View className={`gap-y-2 ${containerStyles}`}>
      <Text className="text-base text-gray-100 font-pmedium">{title}</Text>
      <View className={`flex-row items-center w-full h-16 px-4 bg-black-100 rounded-2xl border-2 ${focus ? 'border-secondary' : 'border-black-200'}`}>
        <TextInput
          className="flex-1 text-white font-psemibold text-base"
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#7b7b8b"
          selectionColor="#FF9C01"
          onChangeText={handleChangeText}
          secureTextEntry={password && !showPassword}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          {...props}
        />
        {password && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image
              className="w-6 h-6"
              resizeMode="contain"
              source={!showPassword ? icons.eye : icons.eyeHide}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  )
}

export default FormField
