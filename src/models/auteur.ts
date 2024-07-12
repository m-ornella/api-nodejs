import { DataTypes, Model } from 'sequelize';
import sequelize from '../database'; 
import Livre from './livre';

class Auteur extends Model {
    public id!: number;
    public nom!: string;
    public prenom!: string;
    public annee_naissance!: number;
    public annee_mort?: number;

    static associate() {
      Auteur.belongsToMany(Livre, { through: 'auteur_livre', foreignKey: 'id_auteur', as: 'livre' });
  }
}
  
Auteur.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nom: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    prenom: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    annee_naissance: { 
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    annee_mort: { 
        type: DataTypes.INTEGER,
        allowNull: true,
      },
  },
  {
    sequelize,
    timestamps: false,
    modelName: 'Auteur',
    tableName: 'auteurs', 
  }
);

export default Auteur;
  
 