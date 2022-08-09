export const randomName = async() => {
    Array(32)
    .fill(null)
    .map(() => Math.round(Math.random() * 16).toString(16))
    .join('');
    
    return `uploads/images/${Date.now().toString()}-${randomName}
    )}`;
}
