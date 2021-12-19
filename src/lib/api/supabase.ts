import { createClient } from "@supabase/supabase-js";

const supabaseClient = createClient(
	import.meta.env.VITE_SUPABASE_URL.toString(),
	import.meta.env.VITE_SUPABASE_ANON_KEY.toString()
);

/**
 * Convenience re-exports for typed selections
 *
 */
export const auth = supabaseClient.auth;
export const storage = supabaseClient.storage;

/**
 *
 * @param table The Supabase table to act upon
 * @returns

*/
export const from = (table: SupaTable) => supabaseClient.from(table);

/**
 *
 * @param bucket The Supabase storage bucket to act upon
 * @returns
 */
export const fromBucket = (bucket: SupaStorageBucket) => supabaseClient.storage.from(bucket);

export default supabaseClient;
