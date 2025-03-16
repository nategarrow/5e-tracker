<script lang="ts">
	import { onMount } from 'svelte';

	let countdown = $state(3);

	onMount(() => {
		const interval = setInterval(() => {
			if (countdown > 0) {
				countdown--;
			} else {
				clearInterval(interval);
				window.location.href = '/';
			}
		}, 1000);

		return () => clearInterval(interval);
	});
</script>

<div class="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800 p-8 text-center">
	<div class="rounded-lg bg-slate-700 p-8 shadow-lg shadow-green-900/20">
		<h1 class="mb-4 text-3xl font-bold text-green-400 text-glow">Character Not Found</h1>
		<p class="mb-4 text-slate-300">The character you're looking for doesn't exist.</p>
		<p class="text-green-300">
			Redirecting you to the home page in {countdown === 1 ? '1 second' : `${countdown} seconds`}...
		</p>
		<a
			href="/"
			class="mt-6 inline-block rounded-md bg-slate-800 px-4 py-2 text-green-400 transition-all duration-300 hover:bg-slate-600 hover:text-green-300 hover:shadow-md hover:shadow-green-900/20"
		>
			Return Home Now
		</a>
	</div>
</div>
