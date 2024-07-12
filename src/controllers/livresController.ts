import { Request, Response } from 'express';
import Livre from '../models/livre';
import HttpStatus from 'http-status-codes';
import Auteur from '../models/auteur';

class LivreController {
  async createLivre(req: Request, res: Response) {
    try {
      const { titre, annee_publication, quantite, id_auteur } = req.body; 
      const livre = await Livre.create({
        titre,
        annee_publication,
        quantite: quantite || 1,
        id_auteur
      });
      res.status(HttpStatus.CREATED).json(livre);
    } catch (error) {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ error: 'Failed to create book' });
    }
  }

  async getLivres(req: Request, res: Response) {
    try {
      const livres = await Livre.findAll({ 
        include: {
          model: Auteur,
          as: 'auteur',
          through: { attributes: [] }
        },
      });
      res.status(HttpStatus.OK).json(livres);
    } catch (error) {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ error: 'Failed to retrieve books' });
    }
  }

  async getLivreById(req: Request, res: Response) {
    try {
      const livreId = parseInt(req.params.id, 10);
      const livre = await Livre.findByPk(livreId);
      if (livre) {
        res.status(HttpStatus.OK).json(livre);
      } else {
        res.status(HttpStatus.NOT_FOUND).json({ error: 'Book not found' });
      }
    } catch (error) {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ error: 'Failed to retrieve book' });
    }
  }

  async getQuantiteLivreById(req: Request, res: Response) {
    try {
      const livreId = parseInt(req.params.id, 10);
      const livre = await Livre.findByPk(livreId, {
        attributes: ['quantite']
      });

      if (livre) {
        res.status(HttpStatus.OK).json({ quantite: livre.quantite });
      } else {
        res.status(HttpStatus.NOT_FOUND).json({ error: 'Book not found' });
      }
    } catch (error) {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ error: 'Failed to retrieve number of books available' });
    }
  }

  async updateLivre(req: Request, res: Response) {
    try {
      const livreId = parseInt(req.params.id, 10);
      const { quantite } = req.body;
      const [updatedRows] = await Livre.update({ quantite }, { where: { id: livreId } });
      if (updatedRows > 0) {
        const updatedLivre = await Livre.findByPk(livreId);
        res.status(HttpStatus.OK).json(updatedLivre);
      } else {
        res.status(HttpStatus.NOT_FOUND).json({ error: 'Book not found or update failed' });
      }
    } catch (error) {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ error: 'Failed to update book' });
    }
  }

  async deleteLivre(req: Request, res: Response) {
    try {
      const livreId = parseInt(req.params.id, 10);
      const deletedRows = await Livre.destroy({ where: { id: livreId } });
      if (deletedRows > 0) {
        res.status(HttpStatus.NO_CONTENT).json({ message: 'Book successfully deleted' });
      } else {
        res.status(HttpStatus.NOT_FOUND).json({ error: 'Book not found or deletion failed' });
      }
    } catch (error) {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ error: 'Failed to delete book' });
    }
  }
}

export default LivreController;
