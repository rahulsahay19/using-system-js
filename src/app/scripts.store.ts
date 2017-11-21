export interface Scripts {
    name: string;
    src: string;
}  
export const ScriptStore: Scripts[] = [
    {name: 'filepicker', src: '../../dist/module1/out-tsc/app/app.component.js'},
    {name: 'typings', src: '../../dist/module1/out-tsc/app/app.component.d.ts'},
    {name: 'jquery', src: "https://code.jquery.com/jquery-1.12.4.min.js"}
];