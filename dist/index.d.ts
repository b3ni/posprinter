import { Printer } from './model';
import { PrinterCommand, PrinterConstants, Printertools } from './printerCommand';
declare type Callback = (devices: Printer[]) => void;
declare class PrinterModule {
    printerModule: any;
    private callback;
    private deviceEventEmitter;
    private isDebug;
    constructor();
    init(isDebug?: boolean): Promise<void>;
    getDevices(): Promise<Printer[]>;
    scanDevices(callback: Callback): Promise<boolean>;
    stopScanDevices(): Promise<boolean>;
    connectDevice(deviceID: string, timeout?: number): Promise<any>;
    connectAndPrintReceipt(deviceId: string): Promise<void>;
    connectAndPrintCommands(deviceId: string, commands: PrinterCommand[]): Promise<void>;
    private listenToNativeEvent;
    private log;
    private initiatePrintReceipt;
    private printTestReceipt;
    private printCommands;
}
declare const printer: PrinterModule;
declare const Command: {
    setPrinter: (command: number, value: number) => {
        type: string;
        command: number;
        value: number;
    };
    setFont: (width: number, height: number, bold: number, underline: number) => {
        type: string;
        width: number;
        height: number;
        bold: number;
        underline: number;
    };
    printText: (text: string) => {
        type: string;
        text: string;
    };
    printImageFromStorage: (url: string) => {
        type: string;
        url: string;
    };
    printLine: (text: string) => {
        type: string;
        text: string;
    };
    printSeparator30: (pattern: string) => {
        type: string;
        text: string;
    };
    printSeparator46: (pattern: string) => {
        type: string;
        text: string;
    };
    printKeyValue30: (key: string, value: string) => {
        type: string;
        text: string;
    };
    printKeyValue46: (key: string, value: string) => {
        type: string;
        text: string;
    };
    setCharacterMultiple: (x: number, y: number) => {
        type: string;
        x: number;
        y: number;
    };
    printBarCode: (barcodeType: number, param1: number, param2: number, param3: number, content: string) => {
        type: string;
        barcodeType: number;
        param1: number;
        param2: number;
        param3: number;
        content: string;
    };
    setLeftMargin: (x: number, y: number) => {
        type: string;
        x: number;
        y: number;
    };
};
export { Command, Printertools, PrinterConstants, };
export default printer;
