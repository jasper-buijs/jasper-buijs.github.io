import { AuthOptions } from "next-auth";
import DiscordProvider from "next-auth/providers/discord";
import prisma from "@/db";

export const authOptions: AuthOptions = {
  providers: [
      DiscordProvider({
        clientId: process.env.DISCORD_ID as string,
        clientSecret: process.env.DISCORD_SECRET as string,
        authorization: { params: { scope: 'identify email guilds' } }
      })
    ],
    theme: {
      logo: "https://heiligemaagden.com/logo.png",
      brandColor: "#CFB43B"
    },
    callbacks: {
      async signIn({ user, account }) {
        if (!account?.access_token) {
          console.error("Missing Discord access token on sign-in.");
          return false;
        }
        const res = await fetch("https://discord.com/api/users/@me/guilds", {
          headers: {
            Authorization: `Bearer ${account?.access_token}`,
          },
        });
        const guilds = await res.json();
        /*const dbUser = await prisma.user.upsert({
          where: {
            identifier: {
              username: user.name as string,
              email: user.email as string,
            }
          },
          update: {
            username: user.name as string,
            image: user.image as string,
            guildMember: guilds.length > 0 ? guilds.some((g: any) => g.id == process.env.GUILD_ID) : undefined,
          },
          create: {
            username: user.name as string,
            email: user.email as string,
            image: user.image as string,
            guildMember: guilds.length > 0 ? guilds.some((g: any) => g.id == process.env.GUILD_ID) : undefined,
          }
        });*/
        const existingUser =
          (await prisma.user.findUnique({
            where: {
              email: user.email as string
            },
          })) ||
          (await prisma.user.findUnique({
            where: {
              username: user.name as string
            },
          }));

        let dbUser;

        if (existingUser) {
          dbUser = await prisma.user.update({
            where: {
              id: existingUser.id
            },
            data: {
              username: user.name as string,
              email: user.email as string,
              image: user.image as string,
              guildMember: guilds.some((g: any) => g.id == process.env.GUILD_ID),
            },
          });
        } else {
          dbUser = await prisma.user.create({
            data: {
              username: user.name as string,
              email: user.email as string,
              image: user.image as string,
              guildMember: guilds.some((g: any) => g.id == process.env.GUILD_ID),
            },
          });
        }

        console.log(`created user ${dbUser.username}`);

        return true;
      },
      async jwt({ token, account }) {
        if (account) {
          token.accessToken = account.access_token;
        }
        return token;
      },
      async session({ session }) {
        //return {...session, user: {...session.user, guilds}};
        return session;
      }
    }
}
