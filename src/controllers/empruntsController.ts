import { Request, Response } from 'express';
import Emprunt from '../models/emprunt';
import Livre from '../models/livre';
import Personne from '../models/personne';
import HttpStatus from 'http-status-codes';

class EmpruntController {
  async createEmprunt(req: Request, res: Response) {
    try {
      const { id_livre, nom, prenom, email } = req.body;

      const livre = await Livre.findByPk(id_livre);
      if (!livre || livre.quantite <= 0) {
        return res.status(HttpStatus.BAD_REQUEST).json({ error: 'Book not available for borrowing' });
      }

      const [personne] = await Personne.findOrCreate({
        where: { email },
        defaults: { nom, prenom, email }
      });

      const emprunt = await Emprunt.create({
        id_livre,
        id_personne: personne.id,
        date_emprunt: new Date().getTime()
      });

      livre.quantite -= 1;
      await livre.save();

      res.status(HttpStatus.CREATED).json(emprunt);
    } catch (error) {
      console.error('Error creating borrowing record:', error);
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ error: 'Failed to create borrowing record' });
    }
  }

  async updateEmprunt(req: Request, res: Response) {
    try {
      const empruntId = parseInt(req.params.id, 10);
      const { date_retour } = req.body;
      const [updatedRows] = await Emprunt.update({ date_retour }, { where: { id: empruntId } });
      if (updatedRows > 0) {
        const updatedEmprunt = await Emprunt.findByPk(empruntId);
        res.status(HttpStatus.OK).json(updatedEmprunt);
      } else {
        res.status(HttpStatus.NOT_FOUND).json({ error: 'Borrowing record not found or update failed' });
      }
    } catch (error) {
      console.error('Error updating borrowing record:', error);
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ error: 'Failed to update borrowing record' });
    }
  }
}

export default EmpruntController;
