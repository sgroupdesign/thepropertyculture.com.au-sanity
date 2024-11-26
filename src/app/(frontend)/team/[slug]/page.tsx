import client from '@/sanity/client'
import { groq, sanityFetch } from '@/sanity/lib/fetch'
import Img from '@/ui/Img'
import PageHeader from '@/ui/PageHeader'
import Pretitle from '@/ui/Pretitle'
import { PortableText } from 'next-sanity'
import Link from 'next/link'
import {
	FaEnvelope,
	FaFacebookF,
	FaGithub,
	FaInstagram,
	FaLinkedinIn,
	FaTiktok,
	FaXTwitter,
	FaYoutube,
} from 'react-icons/fa6'
import { IoIosLink } from 'react-icons/io'

export default async function Page({ params }: Props) {
	const member = await getMember(await params)

	return (
		<div>
			<PageHeader image={member?.pageHeaderImage} />
			<div className="section grid items-center gap-8 md:grid-cols-3 md:gap-x-12">
				<figure className="max-md:full-bleed md:order-1">
					<Img image={member.image} imageWidth={600} />
				</figure>
				<div className="mx-auto flex w-full flex-col items-center md:col-span-2 [&_:is(h1,h2)]:text-balance">
					<div className="flex flex-col gap-4">
						<div className="richtext">
							<Pretitle className="text-coffee">{member.jobTitle}</Pretitle>
							<h1 className="h2">{member.name}</h1>
							<PortableText value={member.body} />
						</div>

						<div>
							<Link className="btn primary" href="/">
								Meet the others
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export async function generateStaticParams() {
	const slugs = await client.fetch<string[]>(
		groq`*[_type == 'person' && defined(metadata.slug.current)].metadata.slug.current`,
	)

	return slugs.map((slug) => ({ slug }))
}

async function getMember(params: { slug?: string }) {
	const { data } = await sanityFetch({
		query: groq`*[_type == 'person' && metadata.slug.current == $slug][0]{
			...,
			pageHeaderImage,
			social[]->,
			'body': select(_type == 'image' => asset->, body),
			metadata {
				...,
				'ogimage': image.asset->url + '?w=1200'
			}
		}`,
		params,
	})

	return data as Sanity.Person
}

type Props = {
	params: Promise<{ slug?: string }>
}

function Icon({
	url,
	...props
}: { url?: string } & React.ComponentProps<'svg'>) {
	if (!url) return null

	return url?.includes('facebook.com') ? (
		<FaFacebookF {...props} />
	) : url?.includes('github.com') ? (
		<FaGithub {...props} />
	) : url?.includes('instagram.com') ? (
		<FaInstagram {...props} />
	) : url?.includes('linkedin.com') ? (
		<FaLinkedinIn {...props} />
	) : url?.includes('tiktok.com') ? (
		<FaTiktok {...props} />
	) : url?.includes('twitter.com') || url?.includes('x.com') ? (
		<FaXTwitter {...props} />
	) : url?.includes('youtube.com') ? (
		<FaYoutube {...props} />
	) : url?.includes('youtube.com') ? (
		<FaEnvelope {...props} />
	) : (
		<IoIosLink {...props} />
	)
}
