export function isDev(): boolean {
    // Allows us to use vite HMR when in dev
    // But use a pre-built app in prod
    return process.env.NODE_ENV === 'development';
}