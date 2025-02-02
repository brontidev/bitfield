/**
 * A bitfield is a simple way of storing multiple boolean values in a single number using binary.
 * Each bit position represents a different boolean flag.
 *
 * @see https://en.wikipedia.org/wiki/Bit_field for more information
 * @template T - The type of bit positions, must extend number
 */
export class Bitfield<T extends number = number> {
	#value: number = 0
	get value(): number {
		return this.#value
	}
	set value(value: number) {
		// TODO: do some checks here
		this.#value = value
	}


	/**
	 * Creates a new bitfield from a value
	 * @param this The Bitfield Class
	 * @param value The value to provide to the bitfield
	 * @returns Bitfield instance
	 */
    /**
     * Creates a new bitfield instance with the specified value
     * @template X - The type of bit positions
     * @template T - The type of Bitfield class
     * @param this - The Bitfield class constructor
     * @param value - The numeric value to initialize the bitfield with
     * @returns A new instance of the Bitfield class
     */
    static fromValue<X extends number, T extends typeof Bitfield<X>>(this: T, value: number): InstanceType<T> {
        const bitfield = new Bitfield() as InstanceType<T>
        bitfield.value = value
        return bitfield
    }

    /**
     * Sets the state of a specific bit in the bitfield
     * @param bit The bit position to modify
     * @param state Whether to enable (true/1) or disable (false/0) the bit. Defaults to true
     * @returns The current Bitfield instance for method chaining
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
     * Gets the state of a specific bit in the bitfield
     * @param bit The bit position to check
     * @returns true if the bit is enabled, false otherwise
     */
    get(bit: T): boolean {
		return (this.#value & (1 << bit)) !== 0
	}
}
