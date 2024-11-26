import '@/styles/app.css'
import Announcement from '@/ui/Announcement'
import Footer from '@/ui/footer'
import Header from '@/ui/header'
import SkipToContent from '@/ui/SkipToContent'
import VisualEditingControls from '@/ui/VisualEditingControls'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import localFont from 'next/font/local'

const FoundersGrotesk = localFont({
	src: [
		{
			path: '../FoundersGroteskTest-Regular.otf',
			weight: '400',
			style: 'normal',
		},
		{
			path: '../FoundersGroteskTest-RegularItalic.otf',
			weight: '400',
			style: 'italic',
		},
		{
			path: '../FoundersGroteskTest-Medium.otf',
			weight: '500',
			style: 'normal',
		},
		{
			path: '../FoundersGroteskTest-MediumItalic.otf',
			weight: '500',
			style: 'italic',
		},
	],
	display: 'swap',
	variable: '--font-founders-grotesk',
})

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en" className={`${FoundersGrotesk.variable}`}>
			<head>
				<link
					rel="stylesheet"
					href="https://use.typekit.net/mty4mks.css"
				></link>
			</head>

			<body className="bg-canvas text-licorice">
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
