import React from "react";
import ThemeProviderWrapper from "./components/ThemeProviderWrapper"; // Adjust the path as needed

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProviderWrapper>{children}</ThemeProviderWrapper>
      </body>
    </html>
  );
}
