import { Request, Response, NextFunction } from 'express';


interface CustomHeaders extends Headers {
  'x-api-key'?: string;
}


const verifyToken = (req: Request, res: Response, next: NextFunction) => {
  const headers = req.headers as unknown as CustomHeaders; 
  const apiKey = headers['x-api-key'];

  if (!apiKey || apiKey !== '8f94826adab8ffebbeadb4f9e161b2dc') {
    return res.status(403).json({ error: 'Unauthorized' });
  }

  next();
};

export default verifyToken;