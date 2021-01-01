// import DB from '@database'
// import { NextApiRequest, NextApiResponse } from 'next'
//
// const allPrinters = async (req: NextApiRequest, res: NextApiResponse) => {
// 	const db = new DB()
//
// 	const allEntries = await db.getAll()
// 	const length = allEntries.length
//
// 	res.statusCode = 200
// 	res.setHeader('Content-type', 'application/json')
// 	res.end(JSON.stringify({ data: allEntries, length }))
// }
//
// export default allPrinters