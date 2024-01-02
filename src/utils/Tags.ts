
/**
 * Parses special characters in post tags to resolve the semantic heirarchy. 
 * 
 * @remarks
 * - `$` Marks the root tag category
 * - `:` Hierarchical divider
 * - `|` Disjunction
 */
export function ParseTag(tag: string) {
    const segments = tag.split(":")
        .map(seg => {
            console.log(seg)
        }
        );
}

/**
 * Removes special characters from tags. Defaults to showing the last tag in the hierarchy.
 * @param tag string
 */
export function FormatTag(tag: string) {
    return tag.split(":").pop()?.split("|").pop()
}