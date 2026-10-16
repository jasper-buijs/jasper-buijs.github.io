import path from "path";
import { fileURLToPath } from "url";
import { defineConfig, globalIgnores } from "@eslint/config-helpers";
import { FlatCompat } from "@eslint/eslintrc";
import { fixupConfigRules } from "@eslint/compat";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

  const compat = new FlatCompat({
    baseDirectory: __dirname,
  });
export default defineConfig([
  globalIgnores(["/node_modules","/.pnp",".pnp.js",".yarn/install-state.gz","/coverage","/.next/","/out/","/build",".DS_Store","*.pem","npm-debug.log*","yarn-debug.log*","yarn-error.log*",".env*.local",".vercel","*.tsbuildinfo","next-env.d.ts","/.idea/*","/livekitconfig/","/public/italy-docs/*","/app/generated/prisma"]),
  {
    extends: fixupConfigRules(compat.extends(
      "next/core-web-vitals"
    )),
  }
]);
