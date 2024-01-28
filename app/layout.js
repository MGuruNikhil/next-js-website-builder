export const metadata = {
  title: "website builder",
  description: "next js website builder",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="https://avatars.githubusercontent.com/u/149516463?s=88&v=4" type="image/x-icon"/>
        <script src="https://cdn.tailwindcss.com"></script>
      </head>

      <body>{children}</body>
    </html>
  );
}
