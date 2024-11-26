'use client'

import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'
import Category from '../Category'
import { categoryStore } from '../store'
import css from './FilterList.module.css'

export default function Filter({
	label,
	value = 'All',
}: {
	label: string
	value?: 'All' | string
}) {
	const { selected, setSelected, reset } = categoryStore()

	useEffect(reset, [usePathname()])

	return (
		<button
			className={cn(
				css.filter,
				'border-b border-coffee',
				selected === value
					? 'border-terracotta text-terracotta'
					: 'border-coffee text-coffee',
			)}
			onClick={() => setSelected(value)}
		>
			<Category label={label} />
		</button>
	)
}
