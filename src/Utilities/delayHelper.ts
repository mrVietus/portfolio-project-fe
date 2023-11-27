export default async (ms:number) => {
    await new Promise(res => setTimeout(res, ms));
};