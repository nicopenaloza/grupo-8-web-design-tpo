import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useState, type FC } from "react";
import { shopCategories } from "../data/shops";
import type { ShopCategory } from "../types";

type FiltersBarProps = {
	searchQuery: string;
	selectedCategory: ShopCategory | "all";
	selectedTags: string[];
	onSearchChange: (query: string) => void;
	onCategoryChange: (category: ShopCategory | "all") => void;
	onTagToggle: (tag: string) => void;
	availableTags: string[];
};

const FiltersBar: FC<FiltersBarProps> = ({
	searchQuery,
	selectedCategory,
	selectedTags,
	onSearchChange,
	onCategoryChange,
	onTagToggle,
	availableTags,
}) => {
	const [isTagsExpanded, setIsTagsExpanded] = useState(false);

	return (
		<div className="space-y-4 rounded-xl border border-border bg-surface p-6 shadow-subtle">
			<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
				<div className="relative">
					<label
						htmlFor="search"
						className="sr-only"
					>
						Buscar locales
					</label>
					<div className="relative">
						<MagnifyingGlassIcon className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-text-muted" />
						<input
							id="search"
							type="text"
							placeholder="Buscar por nombre..."
							value={searchQuery}
							onChange={(e) => onSearchChange(e.target.value)}
							className="w-full rounded-lg border border-border bg-muted/60 pl-10 pr-4 py-2.5 text-sm text-text placeholder:text-text-muted focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
						/>
					</div>
				</div>

				<div>
					<label
						htmlFor="category"
						className="sr-only"
					>
						Filtrar por categoría
					</label>
					<select
						id="category"
						value={selectedCategory}
						onChange={(e) =>
							onCategoryChange(
								e.target.value as ShopCategory | "all"
							)
						}
						className="w-full rounded-lg border border-border bg-muted/60 px-4 py-2.5 text-sm text-text focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
					>
						<option value="all">Todas las categorías</option>
						{shopCategories.map((cat) => (
							<option
								key={cat.value}
								value={cat.value}
							>
								{cat.label}
							</option>
						))}
					</select>
				</div>

				<div className="sm:col-span-2 lg:col-span-1">
					<button
						type="button"
						onClick={() => setIsTagsExpanded(!isTagsExpanded)}
						className="w-full rounded-lg border border-border bg-muted/60 px-4 py-2.5 text-left text-sm text-text transition hover:bg-muted focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
					>
						{isTagsExpanded ? "Ocultar" : "Mostrar"} tags (
						{selectedTags.length} seleccionados)
					</button>
				</div>
			</div>

			{isTagsExpanded && availableTags.length > 0 && (
				<div className="space-y-2 border-t border-border pt-4">
					<p className="text-sm font-medium text-text">
						Filtrar por tags:
					</p>
					<div className="flex flex-wrap gap-2">
						{availableTags.map((tag) => {
							const isSelected = selectedTags.includes(tag);
							return (
								<button
									key={tag}
									type="button"
									onClick={() => onTagToggle(tag)}
									className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
										isSelected
											? "bg-primary text-white"
											: "bg-muted text-text-muted hover:bg-primary/10 hover:text-primary"
									}`}
								>
									{tag}
								</button>
							);
						})}
					</div>
				</div>
			)}
		</div>
	);
};

export default FiltersBar;
