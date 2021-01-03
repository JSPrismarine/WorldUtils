# ChunkUtils
ChunkUtils for [JSPrismarine](https://github.com/JSPrismarine/JSPrismarine) to speed up chunk loading by using WebAssembly. <br />

This includes chunk generation for:
 - SuperFlat


## API
While some chunks may include seed names for generation, the response for every generator is as follows:
```ts
[
     { name: "minecraft:block_name", x: 0, y: 0, z: 0 }
]
```
To setblocks in a chunk based on a generator, your code may look something like:
```ts
const chunk = new Chunk(10, 10);
const get_blocks: BlockData[] = gen_flat_chunk();
const blockManager: BlockManager = server.getBlockManager();
get_blocks.forEach((block: BlockData) => {
     chunk.setBlock(block.x, block.y, block.z, BlockManager.getBlock(block.name));
});
```