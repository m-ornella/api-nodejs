import { DataTypes, Model } from 'sequelize';
import sequelize from '../database'; 
import Auteur from './auteur';
import Livre from './livre';

class AuteurLivre extends Model {
    public id_auteur!: number;
    public id_livre!: number;
  }
  
  AuteurLivre.init(
    {
      id_auteur: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
          model: 'auteur',
          key: 'id',
        },
      },
      id_livre: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
          model: 'livre',
          key: 'id',
        },
      },
    },
    {
      sequelize,
      timestamps: false,
      modelName: 'AuteurLivre',
      tableName: 'auteur_livre',
    }
  );


Livre.belongsToMany(Auteur, {through: AuteurLivre});
Auteur.belongsToMany(Livre, {through: AuteurLivre});
  
export default AuteurLivre;