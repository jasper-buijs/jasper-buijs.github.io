import { AuthOptions } from "next-auth";
import DiscordProvider from "next-auth/providers/discord";

export const authOptions: AuthOptions = {
  providers: [
      DiscordProvider({
        clientId: process.env.DISCORD_ID as string,
        clientSecret: process.env.DISCORD_SECRET as string,
        authorization: { params: { scope: 'identify guilds' } }
      })
    ],
    theme: {
      logo: "http://localhost:3000/logo.png",
      brandColor: "#CFB43B"
    },
    callbacks: {
      async jwt({ token, account }) {
        if (account) {
          token.accessToken = account.access_token;
        }
        return token;
      },
      async session({ session, token }) {
        const res = await fetch("https://discord.com/api/users/@me/guilds", {
          headers: {
            Authorization: `Bearer ${token.accessToken}`,
          },
        });
        const guilds = await res.json();
        return {...session, user: {...session.user, guilds}};
      }
    }
}
