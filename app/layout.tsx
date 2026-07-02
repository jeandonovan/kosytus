import './globals.css';

export const metadata = {
  title: 'Next 3D Light',
  description: 'Minimal 3D viewer with three.js, react-three-fiber and Zustand'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="min-h-screen bg-gray-50 text-gray-900">
        {children}
      </body>
    </html>
  );
}
