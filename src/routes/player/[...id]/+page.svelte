<script lang="ts">
	import type { PageData } from './$types';

	const { data } = $props<{ data: PageData }>();
	let character = $state(data.character);

	function getModifier(score: number): string {
		const mod = Math.floor((score - 10) / 2);
		return mod >= 0 ? `+${mod}` : `${mod}`;
	}
</script>

<article>
	<div class="min-h-screenp-8 container mx-auto">
		<div class="mx-auto max-w-4xl rounded-lg bg-slate-700 p-6 shadow-lg shadow-green-900/20">
			<!-- Header -->
			<div class="mb-6 border-b-2 border-slate-600 pb-4">
				<h1 class="text-glow text-3xl font-bold text-green-400">
					{character.name || 'Unnamed Character'}
				</h1>
				<div class="mt-2 flex flex-wrap gap-2 text-slate-300">
					{#each character.classLevel as classInfo}
						<span class="inline-flex items-center rounded-full bg-slate-800 px-3 py-1 text-sm">
							<span class="font-medium">{classInfo.name}</span>
							{#if classInfo.level}
								<span class="ml-1 text-green-400">Lvl {classInfo.level}</span>
							{/if}
							{#if classInfo.subclass}
								<span class="ml-1 text-purple-400">({classInfo.subclass})</span>
							{/if}
						</span>
					{/each}
				</div>
			</div>

			<!-- Ability Scores -->
			<div class="mb-8 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
				{#each character.stats as stat}
					<div
						class="rounded-lg border border-slate-600 bg-slate-800 p-4 text-center transition-all duration-300 hover:border-green-500 hover:shadow-md hover:shadow-green-900/20"
					>
						<div class="text-sm font-medium tracking-wide text-green-400 uppercase">
							{stat.name}
						</div>
						<div class="my-1 text-2xl font-bold text-slate-200">{stat.value}</div>
						<div class="text-lg text-green-300">{getModifier(stat.value)}</div>
						{#if stat.additionalModifier !== 0}
							<div class="text-sm text-purple-400">
								Additional: {stat.additionalModifier >= 0 ? '+' : ''}{stat.additionalModifier}
							</div>
						{/if}
					</div>
				{/each}
			</div>

			<!-- Equipment -->
			<div class="mb-8">
				<h2 class="mb-4 text-xl font-semibold text-green-400">Equipment</h2>
				{#if character.backpack.length > 0}
					<ul class="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
						{#each character.backpack as item}
							<li
								class="rounded border border-slate-600 bg-slate-800 p-3 text-slate-300 transition-all duration-300 hover:border-green-500 hover:text-slate-200"
							>
								{item}
							</li>
						{/each}
					</ul>
				{:else}
					<p class="text-slate-400 italic">No equipment</p>
				{/if}
			</div>

			<!-- Spells -->
			<div class="mb-8">
				<h2 class="mb-4 text-xl font-semibold text-green-400">Spells</h2>
				{#if character.spells.length > 0}
					<ul class="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
						{#each character.spells as spell}
							<li
								class="rounded border border-slate-600 bg-slate-800 p-3 text-slate-300 transition-all duration-300 hover:border-purple-500 hover:text-slate-200"
							>
								{spell}
							</li>
						{/each}
					</ul>
				{:else}
					<p class="text-slate-400 italic">No spells</p>
				{/if}
			</div>

			<!-- Counters -->
			<div>
				<h2 class="mb-4 text-xl font-semibold text-green-400">Resources & Counters</h2>
				{#if character.counters.length > 0}
					<ul class="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
						{#each character.counters as counter}
							<li
								class="rounded border border-slate-600 bg-slate-800 p-3 text-slate-300 transition-all duration-300 hover:border-green-500 hover:text-slate-200"
							>
								{counter}
							</li>
						{/each}
					</ul>
				{:else}
					<p class="text-slate-400 italic">No counters</p>
				{/if}
			</div>

			<!-- Back Button -->
			<div class="mt-8 border-t-2 border-slate-600 pt-4">
				<a
					href="/"
					class="inline-flex items-center rounded-lg bg-slate-800 px-4 py-2 text-green-400 transition-all duration-300 hover:bg-slate-600 hover:text-green-300 hover:shadow-md hover:shadow-green-900/20"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="mr-2 h-5 w-5"
						viewBox="0 0 20 20"
						fill="currentColor"
					>
						<path
							fill-rule="evenodd"
							d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z"
							clip-rule="evenodd"
						/>
					</svg>
					Back to Characters
				</a>
			</div>
		</div>
	</div>
</article>
