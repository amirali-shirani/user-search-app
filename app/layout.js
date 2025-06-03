import './globals.css'
import { QueryProvider } from './(components)/QueryClientProvider';

export const metadata = {
    title: 'User List App',
    description: 'Built with Next.js App Router + React Query',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <body>
        <QueryProvider>
            {children}
        </QueryProvider>
        </body>
        </html>
    );
}
