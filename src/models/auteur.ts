import { DataTypes, Model } from 'sequelize';
import sequelize from '../database'; 

class Auteur extends Model {
    public id!: number;
    public name!: string;
    public prenom!: string;
    public annee_naissance!: number;
    public annee_mort?: number;
}
  
Auteur.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
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
  
 