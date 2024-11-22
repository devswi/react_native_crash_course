import { Account, Client, Databases } from 'react-native-appwrite'

const client = new Client()
client
  .setEndpoint('https://cloud.appwrite.io/v1')
  .setProject('674024f500139be483ac') // Replace with your project ID
  .setPlatform('com.aiostudio.aora')

export const account = new Account(client)
export const databases = new Databases(client)
