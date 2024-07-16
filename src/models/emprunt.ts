import { DataTypes, Model } from 'sequelize';
import sequelize from '../database';
import Personne from './personne';
import Livre from './livre';

class Emprunt extends Model {
  public id!: number;
  public id_livre!: number;
  public id_personne!: number;
  public date_emprunt!: number;
  public date_retour!: number | null;

  static associate() {
    Emprunt.belongsTo(Personne, { foreignKey: 'id_personne' });
    Emprunt.belongsTo(Livre, { foreignKey: 'id_livre' });
  }
}

Emprunt.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    id_livre: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Livre',
        key: 'id',
      },
    },
    id_personne: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Personne',
        key: 'id',
      },
    },
    date_emprunt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    date_retour: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    sequelize,
    timestamps: false,
    modelName: 'Emprunt',
    tableName: 'emprunts',
  }
);

export default Emprunt;
