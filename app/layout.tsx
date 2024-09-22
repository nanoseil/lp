import '@fontsource/inter';
import { CssBaseline, CssVarsProvider } from '@mui/joy';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1" />
                <title>Nanoseil</title>
            </head>
            <body>
                <CssVarsProvider>
                    {/* must be used under CssVarsProvider */}
                    <CssBaseline />

                    {/* The rest of your application */}
                    {children}
                </CssVarsProvider>
            </body>
        </html>
    )
}
