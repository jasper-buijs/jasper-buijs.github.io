import NextAuth, { DefaultSession } from "next-auth"

declare module "next-auth" {
  interface Session {
    user?: {
      name?: string | null
      email?: string | null
      image?: string | null
      // Add your custom property here
      guilds?: any[] // Replace 'any' with the correct type for guilds if you know it
    }
  }
}