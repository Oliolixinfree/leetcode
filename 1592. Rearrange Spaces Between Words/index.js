function reorderSpaces(text) {
    const words = text.trim().split(/\s+/);
    const wordCount = words.length;
    const spaceCount = (text.match(/ /g) || []).length;

    if (wordCount === 1) {
        return words[0] + ' '.repeat(spaceCount);
    }

    const gaps = wordCount - 1;
    const totalSpaces = Math.floor(spaceCount / gaps);
    const extraSpaces = spaceCount % gaps;

    const result = words.join(' '.repeat(totalSpaces));
    return result + ' '.repeat(extraSpaces);
}

console.log(reorderSpaces('  this   is  a sentence '))
