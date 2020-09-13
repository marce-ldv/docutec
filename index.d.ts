type Url = string
type Json =
	| string
	| number
	| boolean
	| null
	| { [property: string]: Json }
	| Json[]

type TProductId = string

type TProductAttributes = {
	description: string
}

type TProduct = {
	id: TProductId
	name: string
	sku: string
	price: number
	image: Url
	attributes: TProductAttributes
}
