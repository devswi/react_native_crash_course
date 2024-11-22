import CustomButton from '@/components/CustomButton'
import FormField from '@/components/FormField'
import { images } from '@/constants'
import { Link } from 'expo-router'
import { useState } from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

function SignIn() {
  const [form, setForm] = useState({
    email: '',
    password: '',
  })

  const [loading, setLoading] = useState(false)

  function submit() {}

  return (
    <SafeAreaView className="bg-primary">
      <ScrollView contentContainerStyle={{ height: '101%' }}>
        <View className="w-full h-full px-5 my-6">
          <Image
            source={images.logo}
            className="w-[131px] h-[84px]"
            resizeMode="contain"
          />
          <Text className="text-2xl text-white font-semibold mt-10 font-psemibold">Sign Up</Text>
          <View className="gap-y-5 mt-8">
            <FormField
              title="Email"
              value={form.email}
              placeholder="Enter your email"
              keyboardType="email-address"
              handleChangeText={e => setForm({ ...form, email: e })}
            />
            <FormField
              title="Password"
              value={form.password}
              placeholder="Enter your password"
              password
              handleChangeText={e => setForm({ ...form, password: e })}
            />
          </View>
          <View className="flex-row justify-end">
            <Link className="mt-3 text-sm text-gray-100" href="/forget-password"><Text className="text-gray-100 font-pregular">Forgot password?</Text></Link>
          </View>
          <CustomButton
            title="Sign in"
            containerStyles="mt-6"
            isLoading={loading}
            handlePress={submit}
          />
          <View className="justify-center pt-4 flex-row gap-2">
            <Text className="text-lg text-gray-100 font-pregular">Don't have an account?</Text>
            <Link className="text-lg font-psemibold text-secondary" href="/sign-up">Sign Up</Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn
