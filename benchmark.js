const gen_flat_chunk_bench = require('./pkg/ChunkUtils').gen_flat_chunk_bench;

function generate_old_jsp() {
     const generated = [];
     for (let x = 0; x < 16; x++) {
          for (let z = 0; z < 16; z++) {
               let y = 0;
               generated.push({ x, y: y++, z, name: "minecraft:bedrock"});
               generated.push({ x, y: y++, z, name: "minecraft:dirt"});
               generated.push({ x, y: y++, z, name: "minecraft:dirt"});
               generated.push({ x, y: y++, z, name: "minecraft:dirt"});
               generated.push({ x, y: y++, z, name: "minecraft:grass"});
          }
     }
}

function test(name, fn, times = 0) {
     const start = Date.now();
     if (fn instanceof gen_flat_chunk_bench) {
          fn(times);
     } else {
          if (times > 0) {
               for (let i = 0; i < times; i++) {
                    fn();
               }
          } else {
               fn();
          }
     }
     let result = Date.now() - start;
     console.log(name + " took: " + result + "ms.");
}

test("Old Generation:", generate_old_jsp);
test("New Generation:", gen_flat_chunk_bench);
console.log("\n");
test("Old Generation x10:", generate_old_jsp, 10);
test("New Generation x10:", gen_flat_chunk_bench, 10);
console.log("\n");
test("Old Generation x100:", generate_old_jsp, 100);
test("New Generation x100:", gen_flat_chunk_bench, 100);
console.log("\n");
test("Old Generation x1000:", generate_old_jsp, 1000);
test("New Generation x1000:", gen_flat_chunk_bench, 1000);
console.log("\n");
test("Old Generation x10000:", generate_old_jsp, 10000);
test("New Generation x10000:", gen_flat_chunk_bench, 10000);