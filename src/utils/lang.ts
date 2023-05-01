import * as fs from "fs";

export const getLangArr = (): string[] => {
  try {
    const files = fs.readdirSync(process.cwd() + `/content/stringTables`);
    return files
      .filter((file) => file.endsWith(".json"))
      .map((file) => file.replace(".json", ""));
  } catch (error) {
    console.error(
      `Error while reading directory '${process.cwd()}/content/stringTables/': ${error}`
    );
    return [];
  }
};
