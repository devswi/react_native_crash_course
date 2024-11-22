import type { ImageSourcePropType } from 'react-native'
import { icons } from '@/constants'
import { Tabs } from 'expo-router'
import { capitalize } from 'lodash'
import { Image, Text } from 'react-native'

interface TabItemsProps {
  color: string
  focused: boolean
}

interface TabIconProps extends TabItemsProps {
  icon: ImageSourcePropType
}

interface TabTitleProps extends TabItemsProps {
  name: string
}

function TabIcon({ icon, color }: TabIconProps) {
  return (
    <Image source={icon} resizeMode="contain" tintColor={color} className="w-6 h-6" />
  )
}

function TabTitle({ name, color }: TabTitleProps) {
  return (
    <Text className="text-xs font-pregular" style={{ color }}>{name}</Text>
  )
}

interface TabProps {
  name: string
  icon: ImageSourcePropType
}

const tabs: TabProps[] = [
  {
    name: 'home',
    icon: icons.home,
  },
  {
    name: 'bookmark',
    icon: icons.bookmark,
  },
  {
    name: 'create',
    icon: icons.plus,
  },
  {
    name: 'profile',
    icon: icons.profile,
  },
]

function TabsLayout() {
  return (
    <Tabs screenOptions={{
      tabBarActiveTintColor: '#FFA001',
      tabBarInactiveTintColor: '#CDCDE0',
      tabBarStyle: {
        backgroundColor: '#161622',
        borderTopWidth: 1,
        borderTopColor: '#232533',
      },
    }}
    >
      {tabs.map(tab => (
        <Tabs.Screen
          key={tab.name}
          name={tab.name}
          options={{
            title: capitalize(tab.name),
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon icon={tab.icon} color={color} focused={focused} />
            ),
            tabBarLabel: ({ color, focused }) => (
              <TabTitle name={capitalize(tab.name)} color={color} focused={focused} />
            ),
          }}
        />
      ))}
    </Tabs>
  )
}

export default TabsLayout
