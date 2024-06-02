import { DataTypes, Model } from 'sequelize';
import sequelize from '../database'; 
import Auteur from './auteur';

class Livre extends Model {
  public id!: number;
  public titre!: string;
  public annee_publication!: string;
  public quantite!: number;
  public auteur_id!: number;
  static associate() {
    Livre.belongsTo(Auteur, { foreignKey: 'auteur_id' });
}
}
  
Livre.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    titre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    annee_publication: {
      type: DataTypes.STRING,
      allowNull: true,
      field: 'annee_publication', 
    },
    quantite: { 
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    auteur_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
          model: Auteur,
          key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    modelName: 'Livre',
    tableName: 'livres', 
  }
);

export default Livre;
  
 