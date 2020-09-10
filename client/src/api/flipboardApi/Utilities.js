export const getTxtValue = (property) => {
    return (property && property._text) || null;
}

export const getAttrValue = (property) => {
    return (property && property._attributes) || null;
}
