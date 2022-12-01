
drop table bicycle; 
drop table rackControl; 
drop table rackControl; 
drop table slotControl; 
drop table bicycleInfoLogs;

CREATE TABLE bicycleControl (
        bicycleId varchar(11) NOT NULL,
        PRIMARY KEY (bicycleId),
        position_x int, 
        position_y int, 
        vel float, 
        accel float, 
        ts TIMESTAMP
);
CREATE TABLE rackControl (
        rackId INT NOT NULL AUTO_INCREMENT,
        x INT, -- x coordinate
        y INT, -- y coordinate
        slotID varchar(20),
        bicycle varchar (11),
        PRIMARY KEY (rackId)
        FOREIGN KEY (bicycle) REFERENCES bicycle(bicycleId)
);
