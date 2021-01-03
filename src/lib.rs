use js_sys::{ Array };
use wasm_bindgen::prelude::*;
use wasm_bindgen::{ JsValue };
use serde::{ Deserialize, Serialize };

/**
 * Returns a map of positions in the level.
 * We iterate through this
 */
#[wasm_bindgen]
pub fn gen_flat_chunk() -> Array {
    let chunk_dict = Array::new();

    for x in 0..16 {
        for z in 0..16 {
            chunk_dict.set(chunk_dict.length(), add_block(x, 0, z, "minecraft:bedrock"));
            chunk_dict.set(chunk_dict.length(), add_block(x, 1, z, "minecraft:dirt"));
            chunk_dict.set(chunk_dict.length(), add_block(x, 2, z, "minecraft:dirt"));
            chunk_dict.set(chunk_dict.length(), add_block(x, 3, z, "minecraft:dirt"));
            chunk_dict.set(chunk_dict.length(), add_block(x, 4, z, "minecraft:grass"));
        }
    }

    return chunk_dict;
}

#[derive(Serialize, Deserialize)]
pub struct ChunkBlockData {
    x: u32,
    y: u32,
    z: u32,
    name: String
}

pub fn add_block(x: u32, y: u32, z: u32, name: &str) -> JsValue {
    let block_name = String::from(name);
    let data = ChunkBlockData {
        x,
        y,
        z,
        name: block_name,
    };

    return JsValue::from_serde(&data).unwrap();
}