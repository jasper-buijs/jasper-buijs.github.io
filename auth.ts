import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import prisma from "@/db";

export const auth = betterAuth({
  user: {
    additionalFields: {
      guildMember: {
        type: "boolean",
        required: true,
        defaultValue: false,
        input: true,
        returned: true,
      },
    },
  },
  database: prismaAdapter(prisma, {
    provider: "postgresql"
  }),
  emailAndPassword: {
    enabled: false,
  },
  socialProviders: {
    discord: {
      clientId: process.env.DISCORD_ID as string,
      clientSecret: process.env.DISCORD_SECRET as string,
      scope: ["identify", "email", "guilds"],
      prompt: "consent",
      overrideUserInfoOnSignIn: true,
      getUserInfo: async (token) => {
        const [profileResponse, guildsResponse] = await Promise.all([
          fetch("https://discord.com/api/users/@me", { headers: { Authorization: `Bearer ${token.accessToken}` }}),
          fetch("https://discord.com/api/users/@me/guilds", { headers: { Authorization: `Bearer ${token.accessToken}` }}),
        ]);

        if (!profileResponse.ok || !guildsResponse.ok) {
          throw new Error("Failed to fetch Discord profile or guilds.");
        }

        const profile = await profileResponse.json();
        const guilds: { id: string }[] = await guildsResponse.json();

        console.log(profile.global_name ?? profile.username, guilds.some((g) => g.id == process.env.GUILD_ID));

        return {
          user: {
            name: profile.global_name ?? profile.username,
            email: profile.email,
            emailVerified: profile.verified,
            image: profile.avatar ? `https://cdn.discordapp.com/avatars/${profile.id}/${profile.avatar}.png` : undefined,
            guildMember: guilds.some((g) => g.id == process.env.GUILD_ID),
          },
          data: profile,
        };
      },
    }
  }
});
