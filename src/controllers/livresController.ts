import { Request, Response } from 'express';
import Livre from '../models/livre';

class LivreController {
  async createLivre(req: Request, res: Response) {
    try {
        const { titre, annee_publication, quantite, auteur_id } = req.body; 
        const livre = await Livre.create({ titre, annee_publication, quantite, auteur_id });
        res.status(201).json(livre);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create book' });
    }
}
    async getLivres(req: Request, res: Response) {
      try {
        const livres = await Livre.findAll();
        res.status(200).json(livres);
      } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve books' });
      }
    }
    async getLivreById(req: Request, res: Response) {
        try {
          const livreId = parseInt(req.params.id, 10);
          const livre = await Livre.findByPk(livreId);
          if (livre) {
            res.status(200).json(livre);
          } else {
            res.status(404).json({ error: 'Book not found' });
          }
        } catch (error) {
          res.status(500).json({ error: 'Failed to retrieve book' });
        }
      }
      async getQuantiteLivreById(req: Request, res: Response) {
        try {
            const livreId = parseInt(req.params.id, 10);
            const livre = await Livre.findByPk(livreId, {
                attributes: ['quantite']
            });
    
            if (livre) {
                res.status(200).json({ quantite: livre.quantite });
            } else {
                res.status(404).json({ error: 'Book not found' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Failed to retrieve number of books available' });
        }
    }
    
      async updateLivre(req: Request, res: Response) {
        try {
          const livreId = parseInt(req.params.id, 10);
          const { titre, annee_publication } = req.body;
          const [updatedRows] = await Livre.update({ titre, annee_publication }, { where: { id: livreId } });
          if (updatedRows > 0) {
            const updatedLivre = await Livre.findByPk(livreId);
            res.status(200).json(updatedLivre);
          } else {
            res.status(404).json({ error: 'Book not found or update failed' });
          }
        } catch (error) {
          res.status(500).json({ error: 'Failed to update book' });
        }
      }
    
      async deleteLivre(req: Request, res: Response) {
        try {
          const livreId = parseInt(req.params.id, 10);
          const deletedRows = await Livre.destroy({ where: { id: livreId } });
          if (deletedRows > 0) {
            res.status(204).end();
          } else {
            res.status(404).json({ error: 'Book not found or deletion failed' });
          }
        } catch (error) {
          res.status(500).json({ error: 'Failed to delete book' });
        }
      }
    }
    
    export default LivreController;