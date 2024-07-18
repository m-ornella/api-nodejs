import { Request, Response, NextFunction } from 'express';
import crypto from 'crypto';

const setEtag = (req: Request, res: Response, next: NextFunction) => {
  if (res.locals.data) {
    const etag = crypto.createHash('md5').update(JSON.stringify(res.locals.data)).digest('hex');
    res.setHeader('ETag', etag);
  }
  next();
};

export default setEtag;