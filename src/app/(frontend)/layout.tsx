import '@/styles/app.css'
import Announcement from '@/ui/Announcement'
import Footer from '@/ui/footer'
import Header from '@/ui/header'
import Logo from '@/ui/Logo'
import SkipToContent from '@/ui/SkipToContent'
import VisualEditingControls from '@/ui/VisualEditingControls'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<head>
				<link
					rel="stylesheet"
					href="https://use.typekit.net/mty4mks.css"
				></link>
			</head>

			<body className="text-licorice bg-canvas">
				<SkipToContent />
				<Announcement />
				<div className="relative">
					<Logo />
					<div className="pl-16 lg:pl-40">
						<Header />
						<main id="main-content" tabIndex={-1}>
							{children}
						</main>
					</div>
				</div>
				<Footer />
				<VisualEditingControls />
				<Analytics />
				<SpeedInsights />
			</body>
		</html>
	)
}
