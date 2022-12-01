DROP DATABASE IF EXISTS IoT;
-- Para crear la base de datos
CREATE DATABASE IoT;
-- Para conectarme a la base de datos
use IoT;
CREATE TABLE bicycleControl (
        bicycleId varchar(20) NOT NULL,
        PRIMARY KEY (bicycleId),
        position_x int, 
        position_y int, 
        vel float, 
        accel float, 
        ts DATETIME DEFAULT CURRENT_TIMESTAMP
);

insert into bicycleControl (bicycleId, position_x, position_y, vel, accel) 
values ( 'ASW', 3, 4, 3, 3);

SELECT * FROM bicycleControl;


INSERT INTO bicycleControl (bicycleId, position_x, position_y, vel, acces, ts) VALUES ('as3', 45, 55, 66, 78, timestamp());

drop table bicycleControl;
drop table rackControl;

CREATE TABLE rackControl (
        rackId INT NOT NULL AUTO_INCREMENT,
        rackX INT, -- x coordinate
        rackY INT, -- y coordinate
        slotID varchar(20),
        bicycle varchar (11),
        PRIMARY KEY (rackId),
        FOREIGN KEY (bicycle) REFERENCES bicycleControl(bicycleId)
);

SELECT * FROM iot.rackControl