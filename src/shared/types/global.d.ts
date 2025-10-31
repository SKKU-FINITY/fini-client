declare module '*.css' {
    // adjust the shape instead of `any` if you know the exact structure
    export const vars: Record<string, any>;
    const classes: { [key: string]: string };
    export default classes;
}

declare module '*.css.ts' {
    // tighten these types to match your actual exports (vars shape, classes, etc.)
    export const vars: Record<string, any>;
    const classes: { [key: string]: string };
    export default classes;
}