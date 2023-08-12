/**
 * 失敗ファイル
 * 今後なにかの役に立てるよう残す
 * このファイルでやったこと。
 * ①共通関数化：【参考】https://programmer-note.hatenablog.com/entry/2021/09/26/175427#vuejs%E3%81%A7%E5%85%B1%E9%80%9A%E9%96%A2%E6%95%B0%E3%82%92%E3%81%A9%E3%81%86%E4%BD%9C%E3%82%8B%E3%81%8B
 * 共通化と呼び出しは成功。型確認ではじかれ失敗
 * 
 * ②jsonをインポートから呼び出せるようにした：【参考】https://qiita.com/nju33/items/15a8b01396a66644c1b3
 * tsconfig.jsonに「"resolveJsonModule": true」を追加。呼び出せるようになり成功
 * 
 * ③axiosをしようしているがjsonを使用しようとして②でできるようにしたので不要
 */
// import axios from "axios";
// import config from "../json/config.json"
// import { Configuration } from '@/typescript-fetch/runtime';
// import { reactive } from "vue";

// export default function(){
    
//     const getConfig = () => new Configuration({
//         basePath: config.url,
//         credentials: 'include'
//     })
//     return { getConfig } 
// }
