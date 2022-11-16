export class FlagApi {
  static getAllFlagCodes = async (): Promise<{
    [key: string]: string;
  }> => await (await fetch("https://flagcdn.com/en/codes.json")).json();

  static getFlagBlobForCode = async (code: string): Promise<Blob> =>
    await (await fetch(`https://flagcdn.com/256x192/${code}.png`)).blob();
}
