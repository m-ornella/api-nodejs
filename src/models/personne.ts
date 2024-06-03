import { DataTypes, Model } from 'sequelize';
import sequelize from '../database'; 

class Personne extends Model {
  public id!: number;
  public nom!: string;
  public prenom!: string;
  public email!: string;
}
  
Personne.init(
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
      field: 'prenom', 
    },
    email: { 
      type: DataTypes.STRING,
      allowNull: false,
    },
   
  },
  {
    sequelize,
    timestamps: false,
    modelName: 'Personne',
    tableName: 'personnes', 
  }
);

export default Personne;
  
 