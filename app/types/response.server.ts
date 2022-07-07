export type ServerResponse = {
    success: boolean,
    message: string,
    data: {
        userId?: string, 
        userEmail?: string,
    },
}