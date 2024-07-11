// import { Request, Response, NextFunction } from 'express';
// import InvalidApiToken from '../errors/invalidApiToken';

// export function verifyToken(req: Request, res: Response, next: NextFunction) {
//     const expectedToken = process.env.API_TOKEN || "8f94826adab8ffebbeadb4f9e161b2dc";
//     const apiToken = req.query.apiToken as string;

//     console.log('Expected Token:', expectedToken);
//     console.log('Received Token:', apiToken);

//     if (!apiToken || apiToken !== expectedToken) {
//         const error = new InvalidApiToken();
//         return res.status(error.statusCode).json(error.errorResponse);
//     }

//     next();
// }