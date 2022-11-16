export class FlagApi {
  static getAllFlagCodes = async () =>
    await fetch("https://flagcdn.com/en/codes.json");

  static getFlagForCode = async (code: string) =>
    await fetch(`https://flagcdn.com/256x192/${code}.png`);
}
