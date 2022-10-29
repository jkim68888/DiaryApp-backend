export default module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    'post',
    {
      title: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      body: {
        type: DataTypes.STRING(500),
        allowNull: true,
      },
      userid: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      datetime: {
        type: DataTypes.DATE,
        allowNull: true,
      },      
      created_at: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: sequelize.literal('now()'),
      },
    },
    {
      tableName: 'post',
      timestamps: false,
    }
  )
}
