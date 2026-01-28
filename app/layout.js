export const metadata = {
  title: 'Vercel 배포 테스트',
  description: 'Vercel 배포 테스트를 위한 앱',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  )
}
