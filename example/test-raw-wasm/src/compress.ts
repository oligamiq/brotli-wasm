import init, { compress as bw_compress } from 'brotli-wasm'

// import wasm from '../node_modules/brotli-wasm/pkg.web/brotli_wasm_bg.wasm'
import wasm from 'brotli-wasm/web/bg.wasm'

export const compress = async (
    input: Uint8Array
) => {
    // let bw = await def;
    // bw.compress(input)

    await init(wasm)

    // console.log('Compressing input:', wasm)

    return bw_compress(input)
}
