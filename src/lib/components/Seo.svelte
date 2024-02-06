<script>
  import { page } from "$app/stores";
  export let title;
  export let type;
  export let description;

  //   $: url = $page.url.href;
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />
  {@html `<script type="application/ld+json">
{
"@context": "http://schema.org",
"@type": ${type},
  "name": ${title},
  "url": ${$page.url.href},
}
  </script>`}
</svelte:head>
