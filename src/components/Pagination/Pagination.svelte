<script lang="ts">
  import { mediaQuery } from "svelte-legos";
  import * as Pagination from "@/components/ui/pagination/index.js";

  const isDesktop = mediaQuery("(min-width: 768px)");

  let count = 20;
  $: perPage = $isDesktop ? 1 : 8;
  $: siblingCount = $isDesktop ? 1 : 0;
</script>

<div class="pagination">
  <Pagination.Root {count} {perPage} {siblingCount} let:pages let:currentPage>
    <Pagination.Content>
      <Pagination.Item>
        <Pagination.PrevButton>
          <span class="hidden sm:block">Prev</span>
        </Pagination.PrevButton>
      </Pagination.Item>
      {#each pages as page (page.key)}
        {#if page.type === "ellipsis"}
          <Pagination.Item>
            <Pagination.Ellipsis />
          </Pagination.Item>
        {:else}
          <Pagination.Item>
            <Pagination.Link
              class="border-0 w-5"
              {page}
              isActive={currentPage === page.value}
            >
              {page.value}
            </Pagination.Link>
          </Pagination.Item>
        {/if}
      {/each}
      <Pagination.Item>
        <Pagination.NextButton>
          <span class="hidden sm:block">Next</span>
        </Pagination.NextButton>
      </Pagination.Item>
    </Pagination.Content>
  </Pagination.Root>
</div>

<style lang="sass">
  .pagination
    margin: 6rem 0rem
</style>
