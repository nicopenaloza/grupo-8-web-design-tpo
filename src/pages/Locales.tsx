import { useMemo, useState } from "react";
import FiltersBar from "../components/FiltersBar";
import ShopCard from "../components/ShopCard";
import { shops } from "../data/shops";
import type { Shop, ShopCategory } from "../types";

const Locales = () => {
	const [searchQuery, setSearchQuery] = useState("");
	const [selectedCategory, setSelectedCategory] = useState<
		ShopCategory | "all"
	>("all");
	const [selectedTags, setSelectedTags] = useState<string[]>([]);

	const availableTags = useMemo(() => {
		const tags = new Set<string>();
		shops.forEach((shop) => {
			shop.tags.forEach((tag) => tags.add(tag));
		});
		return Array.from(tags).sort();
	}, []);

	const filteredShops = useMemo(() => {
		return shops.filter((shop) => {
			const matchesSearch =
				searchQuery === "" ||
				shop.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
				shop.shortDescription
					.toLowerCase()
					.includes(searchQuery.toLowerCase());

			const matchesCategory =
				selectedCategory === "all" ||
				shop.category === selectedCategory;

			const matchesTags =
				selectedTags.length === 0 ||
				selectedTags.some((tag) => shop.tags.includes(tag));

			return matchesSearch && matchesCategory && matchesTags;
		});
	}, [searchQuery, selectedCategory, selectedTags]);

	const handleTagToggle = (tag: string) => {
		setSelectedTags((prev) =>
			prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
		);
	};

	const handleViewMap = (shop: Shop) => {
		const query = encodeURIComponent(
			`${shop.name} ${shop.location} Galería Urbana`
		);
		if (typeof window !== "undefined") {
			window.open(
				`https://www.google.com/maps/search/?api=1&query=${query}`,
				"_blank",
				"noopener,noreferrer"
			);
		}
	};

	return (
		<div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
			<div className="mb-12">
				<h1 className="text-3xl font-semibold text-text sm:text-4xl">
					Locales
				</h1>
				<p className="mt-4 text-lg text-text-muted">
					Explorá nuestras propuestas y encontrá tu próximo
					descubrimiento
				</p>
			</div>

			<div className="mb-8">
				<FiltersBar
					searchQuery={searchQuery}
					selectedCategory={selectedCategory}
					selectedTags={selectedTags}
					onSearchChange={setSearchQuery}
					onCategoryChange={setSelectedCategory}
					onTagToggle={handleTagToggle}
					availableTags={availableTags}
				/>
			</div>

			<div className="mb-4 text-sm text-text-muted">
				{filteredShops.length === 1
					? "1 local encontrado"
					: `${filteredShops.length} locales encontrados`}
			</div>

			{filteredShops.length === 0 ? (
				<div className="rounded-xl border border-border bg-surface p-12 text-center">
					<p className="text-text-muted">
						No se encontraron locales con los filtros seleccionados.
					</p>
					<button
						type="button"
						onClick={() => {
							setSearchQuery("");
							setSelectedCategory("all");
							setSelectedTags([]);
						}}
						className="mt-4 text-sm font-medium text-primary transition-colors hover:text-secondary"
					>
						Limpiar filtros
					</button>
				</div>
			) : (
				<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
					{filteredShops.map((shop) => (
						<ShopCard
							key={shop.id}
							shop={shop}
							onViewMap={handleViewMap}
						/>
					))}
				</div>
			)}
		</div>
	);
};

export default Locales;
