export type PostableType = number | string | boolean


interface IndexedObject {
    [index: number]: PostableType;
}


export interface PhpCompatibleObject {
    [key: string]: PostableType;
}


export function objectToPhpPostCompatible(data: {
    [key: string]: PostableType | IndexedObject | undefined
}): PhpCompatibleObject {
    const formData: PhpCompatibleObject = {};

    for (const field in data) {
        const datum: PostableType | IndexedObject | undefined = data[field];

        if (!datum) continue; // Handle undefined
        if (typeof datum != 'object') {
            formData[field] = datum; // Directly pass-through basic types
            continue;
        }

        for (const index in datum) {
            const newKey: string = `${field}[${index}]`;
            formData[newKey]     = datum[index];
        }
    }

    return formData;
}