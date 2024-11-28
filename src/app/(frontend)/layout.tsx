import '@/styles/app.css'
import Announcement from '@/ui/Announcement'
import Footer from '@/ui/footer'
import Header from '@/ui/header'
import SkipToContent from '@/ui/SkipToContent'
import VisualEditingControls from '@/ui/VisualEditingControls'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import localFont from 'next/font/local'
import Script from 'next/script'

const Texta = localFont({
	src: [
		{
			path: '../TextaRegular.ttf',
			weight: '400',
			style: 'normal',
		},
		{
			path: '../TextaBold.ttf',
			weight: '600',
			style: 'normal',
		},
	],
	display: 'swap',
	variable: '--font-texta',
})

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en" className={`${Texta.variable}`}>
			<head>
				<Script
					src="//au.fw-cdn.com/20888060/320202.js"
					strategy="lazyOnload"
				></Script>
			</head>

			<body className="bg-canvas text-ink">
				<SkipToContent />
				<Announcement />
				<div className="relative">
					<Header />
					<main id="main-content" tabIndex={-1} className="pl-14 md:pl-0">
						{children}
					</main>
				</div>
				<div className="pl-14 md:pl-0">
					<Footer />
				</div>
				<VisualEditingControls />
				<Analytics />
				<SpeedInsights />
			</body>
		</html>
	)
}
