'use strict' 

module.exports = (sequelize, DataTypes) => {

  let Paciente = sequelize.define('paciente', { 
    id: {
      type: DataTypes.BIGINT, 
      autoIncrement: true, 
      primaryKey: true,  
      allowNull: false 
    },
    nombre: { 
      type: DataTypes.STRING, 
      allowNull: false 
    },
    apellido: {
      type: DataTypes.STRING,
      allowNull: false
    },
    documento:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    email: {
      type: DataTypes.STRING,
    },
    obra_social: {
      type: DataTypes.STRING,
    },
    numero_afiliado:{
        type: DataTypes.STRING,
    },
   
    createdAt: { 
      type: DataTypes.DATE, 
      field: 'created_at', 
      defaultValue: DataTypes.NOW, 
      allowNull: false 
    },
    updatedAt: {
      type: DataTypes.DATE,
      field: 'updated_at',
      defaultValue: DataTypes.NOW,
      allowNull: false
    },
    deletedAt: { 
      type: DataTypes.DATE,
      field: 'deleted_at'
    }
  }, {
    paranoid: true, 
    freezeTableName: true, 
  })

  Medico.associate = models => {
    Medico.hasMany(models.Paciente)
  }

  return Paciente
}
