<script lang="ts">
	import { characters } from '$lib/stores/characters';
	import { onMount } from 'svelte';

	interface ClassInfo {
		name: string;
		level: number;
		subclass: string;
	}

	function hasClassInfo(classInfo: ClassInfo): boolean {
		return classInfo.name !== '' || classInfo.level > 0 || classInfo.subclass !== '';
	}

	let loading = true;

	onMount(() => {
		// Set loading to false once the component is mounted
		loading = false;
	});
</script>

<div class="mx-auto max-w-4xl">
	<h1 class="text-glow mb-8 text-4xl font-bold text-green-400">Character Selection</h1>

	{#if loading}
		<ul
			class="grid gap-4 md:grid-cols-2 lg:grid-cols-3"
			role="list"
			aria-label="Loading characters"
		>
			{#each Array(3) as _, i (i)}
				<li>
					<div
						class="relative block h-full overflow-hidden rounded-lg bg-slate-700 p-6 shadow-md"
						aria-hidden="true"
					>
						<div class="mb-4">
							<div
								class="h-8 w-3/4 animate-pulse rounded bg-slate-600"
								style="animation-delay: {i * 100}ms"
							></div>
						</div>
						<div class="space-y-3">
							<div
								class="h-5 w-1/2 animate-pulse rounded bg-slate-600"
								style="animation-delay: {i * 150}ms"
							></div>
							<div
								class="h-5 w-1/3 animate-pulse rounded bg-slate-600"
								style="animation-delay: {i * 200}ms"
							></div>
						</div>
						<div
							class="absolute inset-x-0 bottom-0 h-1 animate-pulse bg-green-500"
							style="animation-delay: {i * 250}ms"
						></div>
					</div>
				</li>
			{/each}
		</ul>
	{:else if $characters.length === 0}
		<div class="rounded-lg bg-slate-700 p-8 text-center shadow-md" role="alert">
			<div class="mb-6 flex justify-center">
				<div class="animate-float relative h-24 w-24" aria-hidden="true">
					<div class="absolute inset-0 animate-pulse rounded-full bg-green-900 opacity-50"></div>
					<div class="absolute inset-0 rounded-full border-4 border-dashed border-green-400"></div>
				</div>
			</div>
			<h2 class="mb-2 text-2xl font-bold text-green-400">Begin Your Adventure</h2>
			<p class="mb-4 text-slate-300">You haven't created any characters yet.</p>
			<p class="text-green-300">Click the button below to create your first hero!</p>
		</div>
	{:else}
		<ul class="grid gap-4 md:grid-cols-2 lg:grid-cols-3" role="list">
			{#each $characters as character}
				<li>
					<a
						href={`/player/${character.id}`}
						class="group relative block h-full overflow-hidden rounded-lg bg-slate-700 p-6 shadow-md transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg hover:ring-1 hover:shadow-green-900/30 hover:ring-green-400"
						aria-label="View {character.name || 'Unnamed Character'}'s character sheet"
					>
						<div class="mb-2">
							<h2
								class="text-2xl font-bold text-green-400 transition-colors duration-300 group-hover:text-green-300"
							>
								{character.name || 'Unnamed Character'}
							</h2>
						</div>
						<div class="space-y-1 text-slate-300">
							{#if character.classLevel.some(hasClassInfo)}
								<ul class="space-y-1" aria-label="Character classes">
									{#each character.classLevel as classInfo}
										{#if hasClassInfo(classInfo)}
											<li class="flex items-center gap-2">
												<span class="font-medium">{classInfo.name || 'No Class'}</span>
												{#if classInfo.level}
													<span class="text-sm text-green-400">Level {classInfo.level}</span>
												{/if}
												{#if classInfo.subclass}
													<span class="text-sm text-purple-400">({classInfo.subclass})</span>
												{/if}
											</li>
										{/if}
									{/each}
								</ul>
							{:else}
								<div class="rounded-md bg-slate-800 p-2 text-sm text-green-400" role="note">
									<span>No class or level set</span>
								</div>
							{/if}
						</div>
						<div
							class="absolute inset-x-0 bottom-0 h-1 scale-x-0 transform bg-gradient-to-r from-green-400 via-green-500 to-purple-500 transition-transform duration-300 ease-out group-hover:scale-x-100"
							aria-hidden="true"
						></div>
					</a>
				</li>
			{/each}
		</ul>
	{/if}

	<!-- Add Character Button -->
	<button
		class="mt-6 w-full rounded-lg border-2 border-dashed border-green-500 bg-slate-800 p-4 text-green-400 transition-all duration-300 hover:border-green-400 hover:bg-slate-700 hover:text-green-300 hover:shadow-md hover:shadow-green-900/20 md:w-auto"
		aria-label="Create a new character"
	>
		<span class="text-lg">+ Add New Character</span>
	</button>
</div>
