export class ComparatorUtils {
    private static instance = new ComparatorUtils();

    static getInstance() {
        return this.instance;
    }

    compare(field: string): Function {
        return (a, b) => a && b ? a[field] === b[field] : a === b;
    }
}