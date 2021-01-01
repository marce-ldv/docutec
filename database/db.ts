import allData from './data'

class Database {
	constructor() {}

	getAll(): Array<TProduct> {
		return allData;
	}

	// getById(id: string): TProduct | null {
	// 	if (!Object.prototype.hasOwnProperty.call(allData, id)) {
	// 		return null
	// 	}
	//
	// 	const entry = allData[id]
	// 	return entry
	// }
}

export default Database