<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<div class="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 p-8">
	{@render children()}
</div>
