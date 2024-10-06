import { User } from '../models/User.model.js';
import { Point } from '../models/Point.model.js';
import { Event } from '../models/Event.model.js';
import { Favorite } from '../models/Favorite.model.js';
import { Registration } from '../models/Registration.model.js';

const initializeAssociations = () => {
    User.hasMany(Point, { foreignKey: 'created_by' });
    Point.belongsTo(User, { foreignKey: 'created_by' });

    User.hasMany(Event, { foreignKey: 'created_by' });
    Event.belongsTo(User, { foreignKey: 'created_by' });

    User.hasMany(Favorite, { foreignKey: 'user_id' });
    Favorite.belongsTo(User, { foreignKey: 'user_id' });

    Point.hasMany(Favorite, { foreignKey: 'point_id' });
    Favorite.belongsTo(Point, { foreignKey: 'point_id' });

    Event.hasMany(Favorite, { foreignKey: 'event_id' });
    Favorite.belongsTo(Event, { foreignKey: 'event_id' });

    User.hasMany(Registration, { foreignKey: 'user_id' });
    Registration.belongsTo(User, { foreignKey: 'user_id' });

    Event.hasMany(Registration, { foreignKey: 'event_id' });
    Registration.belongsTo(Event, { foreignKey: 'event_id' });
};

export default initializeAssociations;
