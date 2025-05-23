import { betterAuth } from "better-auth";
import { drizzleAdapter } from 'better-auth/adapters/drizzle'
import { db } from "./db";
import * as table from './db/schema'

export const createAuth = () => {
  return betterAuth({
    database: drizzleAdapter(db, {
      provider: "pg",
      schema: {
        verifications: table.verification,
        users: table.user,
        accounts: table.account,
        sessions: table.session,
      },
      usePlural: true,
    }),
    socialProviders: {
      github: {
        clientId: process.env.GITHUB_CLIENT_ID as string,
        clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
      }
    },
  })
}

export const getAuth = () => createAuth()