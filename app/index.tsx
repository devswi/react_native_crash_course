import { useState } from 'react'
import { Text, View } from 'react-native'

export default function Index() {
  const [name, setName] = useState('')

  return (
    <View className="flex-1 items-center justify-center bg-white" onLayout={e => console.log(e)}>
      <Text className="font-bold text-lg text-pink-500">Hello world!</Text>
      <Text></Text>
    </View>
  )
}
