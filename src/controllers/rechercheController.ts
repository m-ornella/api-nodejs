import { Request, Response } from 'express';
import Livre from '../models/livre';
import Auteur from '../models/auteur';
import HttpStatus from 'http-status-codes';
import { Op } from 'sequelize';

class RechercheController {
  async search(req: Request, res: Response) {
    try {
      const mots = req.params.mots;
      const livres = await Livre.findAll({
        where: {
          [Op.or]: [
            { titre: { [Op.like]: `%${mots}%` } },
            { '$auteur.nom$': { [Op.like]: `%${mots}%` } },
            { '$auteur.prenom$': { [Op.like]: `%${mots}%` } },
          ]
        },
        include: {
          model: Auteur,
          as: 'auteur',
          attributes: ['id', 'nom', 'prenom', 'annee_naissance', 'annee_mort'],
        },
      });
      res.status(HttpStatus.OK).json(livres);
    } catch (error) {
      console.error('Error searching books:', error);
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ error: 'Failed to search books' });
    }
  }
}

export default RechercheController;
