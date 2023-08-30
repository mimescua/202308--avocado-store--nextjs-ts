import DB from '@database';
import { NextApiRequest, NextApiResponse } from 'next';

const singleAvo = async (
	request: NextApiRequest,
	response: NextApiResponse
) => {
	const db = new DB();
	const id = request.query.id;
	const avo = await db.getById(id as string);

	// response.statusCode = 200;
	// response.setHeader('Content-type', 'application/json');
	// response.end(JSON.stringify({ data: avo }));
	response.status(200).json(avo);
};

export default singleAvo;
