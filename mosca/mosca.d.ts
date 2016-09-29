declare namespace Mosca {
    interface Server {
        new(options: any): Server;
        on(event: string, Function);
    }
        
    interface MoscaStatic {
        Server: Server;
    }
}

declare var mosca: Mosca.MoscaStatic;

declare module 'mosca' {
    export = mosca;
}