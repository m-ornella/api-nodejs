import { DataTypes, Model } from 'sequelize';
import sequelize from '../database'; 

class Livre extends Model {
  public id!: number;
  public titre!: string;
  public annee_publication!: string;
  public quantite!: number;
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
    description: {
      type: DataTypes.STRING,
      allowNull: true,
      field: 'annee_publication', 
    },
    quantite: { 
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Livre',
    tableName: 'livres', 
  }
);

export default Livre;
  
 