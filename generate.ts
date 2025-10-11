import { fromVault } from "fumadocs-obsidian";

await fromVault({
  dir: "test",
  out: {
    // you can specify the locations of `/public` & `/content/docs` folder
  },
});
