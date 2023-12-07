import { FC, PropsWithChildren } from "react";

import { Inter } from "next/font/google";

import type { Metadata } from "next";

import "./globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "99Track",
  description: "Track yo shit",
};

const RootLayout: FC<PropsWithChildren> = (props) => {
  const { children } = props;

  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  );
};

export default RootLayout;
