const characterMap: Record<string, string> = {
    '<': '&lt;',
    '>': '&gt;',
    '&': '&amp;',
    '"': '&quot;',
    "'": '&apos;',
}

export function escapeXml(source: string) {
    return source.replace(/[&<>"']/g, (s: string) => characterMap[s] ?? '')
}
