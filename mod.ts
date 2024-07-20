

/**
 * A bitfield is a simple way of storing multiple booleans into 1 number using binary.
 * Each bit represents a different boolean flag.
 *
 * @see https://en.wikipedia.org/wiki/Bit_field for a better explanation
 */
export class Bitfield<T extends number> {
	#value: number = 0
	get value(): number {
		return this.#value
	}
	set value(value: number) {
		// TODO: do some checks here
		this.#value = value
	}

	/**
	 * Enable or Disable A bit
	 * @param bit The bit to enable (in this case, a discord flag)
	 * @param state enable or disable bit
	 */
	set(bit: T, state = true): Bitfield<T> {
		if (state) {
			this.#value |= 1 << bit
		} else {
			this.#value &= ~(1 << bit)
		}
		return this
	}

	/**
	 * Get the state of a bit
	 * @param bit The bit to check
	 * @returns if bit is enabled or not
	 */
	get(bit: T): boolean {
		return (this.#value & (1 << bit)) !== 0
	}
}
