import { Request, Response } from 'express';
import Auteur from '../models/auteur';

class AuteurController {
  async createAuteur(req: Request, res: Response) {
    try {
      const { nom, prenom, annee_naissance, annee_mort } = req.body;
      const auteur = await Auteur.create({ nom, prenom, annee_naissance, annee_mort });
      res.status(201).json(auteur);
    } catch (error) {
      res.status(500).json({ error: 'Failed to create author' });
    }
  }

  async getAuteurs(req: Request, res: Response) {
    try {
      const auteurs = await Auteur.findAll();
      res.status(200).json(auteurs);
    } catch (error) {
      res.status(500).json({ error: 'Failed to retrieve authors' });
    }
  }

  async getAuteurById(req: Request, res: Response) {
    try {
      const auteurId = parseInt(req.params.id, 10);
      const auteur = await Auteur.findByPk(auteurId);
      if (auteur) {
        res.status(200).json(auteur);
      } else {
        res.status(404).json({ error: 'Author not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Failed to retrieve author' });
    }
  }

  async updateAuteur(req: Request, res: Response) {
    try {
      const auteurId = parseInt(req.params.id, 10);
      const { nom, prenom, annee_naissance, annee_mort } = req.body;
      const [updatedRows] = await Auteur.update({ nom, prenom, annee_naissance, annee_mort }, { where: { id: auteurId } });
      if (updatedRows > 0) {
        const updatedAuteur = await Auteur.findByPk(auteurId);
        res.status(200).json(updatedAuteur);
      } else {
        res.status(404).json({ error: 'Author not found or update failed' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Failed to update author' });
    }
  }

  async deleteAuteur(req: Request, res: Response) {
    try {
      const auteurId = parseInt(req.params.id, 10);
      const deletedRows = await Auteur.destroy({ where: { id: auteurId } });
      if (deletedRows > 0) {
        res.status(204).end();
      } else {
        res.status(404).json({ error: 'Author not found or deletion failed' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete author' });
    }
  }
}

export default AuteurController;
