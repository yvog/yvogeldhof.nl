export function toggleURLSearchParam(key: string, value: string, enabled?: boolean): string {
    const searchParams = new URLSearchParams(window.location.search);

    if (enabled) {
        searchParams.set(key, value);
    } else {
        searchParams.delete(key);
    }

    return searchParams.toString();
}