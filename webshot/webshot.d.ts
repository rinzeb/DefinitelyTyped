interface webshotstatic {
    (content: any, filename: string, options: any, callback: Function): void;
}

declare module "webshot" {
    export = webshot;
}
declare var webshot: webshotstatic;
