import type { Env } from 'wildebeest/consumer/src'

export interface Cache {
	get<T>(key: string): Promise<T | null>
	put<T>(key: string, value: T): Promise<void>
}

export function cacheFromEnv(env: Env): Cache {
	return {
		async get<T>(key: string): Promise<T | null> {
			return null
		},

		async put<T>(key: string, value: T): Promise<void> {
		},
	}
}
