/// <reference types="mongoose" />
export default function connect(url: string, user: string, password: string, authSource?: string): Promise<typeof import("mongoose")>;
